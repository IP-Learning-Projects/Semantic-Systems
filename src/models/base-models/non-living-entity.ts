import { MeasurementUnit } from './measurement-unit';
import { PhysicalEntity } from './physical-entity';

export class NonLivingEntity extends PhysicalEntity {
    constructor(public weight: MeasurementUnit, public height: MeasurementUnit) {
        super(false, weight, height);
    }
}
