import { Animal } from './base-models/animal';
import { MeasurementUnit } from './base-models/measurement-unit';

export class DumboTheElephant extends Animal {
    constructor() {
        super(new MeasurementUnit(2000, 'kg'), new MeasurementUnit(3, 'm'), 'male');
    }
}
