import { Human } from './human';
import { MeasurementUnit } from './measurement-unit';

export class Man extends Human {
    constructor(public weight: MeasurementUnit, public height: MeasurementUnit) {
        super(weight, height, 'male');
    }
}
