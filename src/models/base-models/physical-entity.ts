import { Entity } from './entity';
import { MeasurementUnit } from './measurement-unit';

export class PhysicalEntity extends Entity {
    constructor(public isAlive: boolean, public weight: MeasurementUnit, public height: MeasurementUnit) {
        super(true);
    }
}
