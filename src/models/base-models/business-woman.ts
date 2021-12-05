import { MeasurementUnit } from './measurement-unit';
import { Woman } from './woman';

export class BusinessWoman extends Woman {
    constructor(public weight: MeasurementUnit, public height: MeasurementUnit, public income: MeasurementUnit) {
        super(weight, height);
    }
}
