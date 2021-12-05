import { Information } from './information';

export class Address extends Information {
    constructor(public street: string, public city: string, public country: string) {
        super();
    }

    public validate(street: string = this.street, city: string = this.city, country: string = this.country) {
        if (!street || !city || !country) {
            return false;
        }
        return true;
    }
}
