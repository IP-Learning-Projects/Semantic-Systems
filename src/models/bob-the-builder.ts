import { BusinessMan } from './base-models/business-man';
import { MeasurementUnit } from './base-models/measurement-unit';

export class BobTheBuilder extends BusinessMan {
    constructor() {
        super(new MeasurementUnit(85, 'kg'), new MeasurementUnit(2, 'm'), new MeasurementUnit(85000, '$'));
    }
}
