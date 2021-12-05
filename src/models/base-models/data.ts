import { Entity } from './entity';

export class Data extends Entity {
    constructor(public canBeDecoded: boolean) {
        super(false);
    }
}
