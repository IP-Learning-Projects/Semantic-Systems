import { MeasurementUnit } from './base-models/measurement-unit';
import { NonLivingEntity } from './base-models/non-living-entity';

export class Rock extends NonLivingEntity {
    constructor() {
        super(new MeasurementUnit(100, 'kg'), new MeasurementUnit(5, 'm'));
    }
}
