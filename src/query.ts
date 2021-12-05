function getAllMethods(objToCheck: Record<string, unknown>): string[] {
    const toFilterOut = [
        'constructor',
        'prototype',
        'name',
        'length',
        'caller',
        'arguments',
        'call',
        'apply',
        'bind',
        '__defineGetter__',
        '__defineSetter__',
        '__lookupGetter__',
        '__lookupSetter__',
        'hasOwnProperty',
        'isPrototypeOf',
        'propertyIsEnumerable',
        'toLocaleString',
        'toString',
        'valueOf',
    ];
    const props = [];
    let obj = objToCheck;
    do {
        props.push(...Object.getOwnPropertyNames(obj));
    } while ((obj = Object.getPrototypeOf(obj)));

    return props.sort().filter((prop, index, arr) => {
        if (!toFilterOut.includes(prop) && prop != arr[index + 1] && typeof objToCheck[prop] == 'function') return true;
    });
}
export function query(obj: object) {
    console.log('Name:', obj);
    const objTemp = obj as Record<string, unknown>;
    const methods = getAllMethods(objTemp);
    if (methods.length > 0) {
        console.log('Methods available:', methods);
        methods.forEach((key) => console.log(key, (objTemp[key] as Function)()));
    }
    console.log('\n');
}
