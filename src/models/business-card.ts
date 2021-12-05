import { Address } from './base-models/address';
import { MeasurementUnit } from './base-models/measurement-unit';
import { PersonalInformation } from './base-models/personal-information';
import { InformationReprezentation } from './information-reprezentation';

// Multiple inheritance is not permitted in typescript so we will have to use a workaround
export class BusinessCard extends InformationReprezentation {
    constructor(public weight: MeasurementUnit, public height: MeasurementUnit) {
        super(new MeasurementUnit(0.5, 'kg'), new MeasurementUnit(0.5, 'm'));

        const address = new Address('Neverland', 'Town', 'Imaginary');
        const personalInfo = new PersonalInformation('Bob');
        Object.assign(this, address, personalInfo); // Copy all properties from information to this
    }
}
