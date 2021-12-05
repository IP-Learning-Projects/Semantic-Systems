import { Man } from './man';
import { MeasurementUnit } from './measurement-unit';

export class BusinessMan extends Man {
    constructor(public weight: MeasurementUnit, public height: MeasurementUnit, public income: MeasurementUnit) {
        super(weight, height);
    }
}
