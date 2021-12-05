import { Information } from './base-models/information';
import { MeasurementUnit } from './base-models/measurement-unit';
import { NonLivingEntity } from './base-models/non-living-entity';

// Multiple inheritance is not permitted in typescript so we will have to use a workaround
export class InformationReprezentation extends NonLivingEntity {
    constructor(public weight: MeasurementUnit, public height: MeasurementUnit) {
        super(weight, height);

        const information = new Information();
        Object.assign(this, information); // Copy all properties from information to this
    }
}
