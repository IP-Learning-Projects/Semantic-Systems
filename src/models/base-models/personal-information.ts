import { Information } from './information';

export class PersonalInformation extends Information {
    constructor(public name: string) {
        super();
    }
}
