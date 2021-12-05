import { LivingCreature } from './living-creature';
import { MeasurementUnit } from './measurement-unit';

export class Human extends LivingCreature {
    constructor(public weight: MeasurementUnit, public height: MeasurementUnit, public sex: 'male' | 'female') {
        super(weight, height, sex, true);
    }
}
