import { MeasurementUnit } from './measurement-unit';
import { PhysicalEntity } from './physical-entity';

export class LivingCreature extends PhysicalEntity {
    constructor(
        public weight: MeasurementUnit,
        public height: MeasurementUnit,
        public sex: 'male' | 'female',
        public hasConsciousness: boolean
    ) {
        super(true, weight, height);
    }

    public consumeEnergy(weight: MeasurementUnit = this.weight, height: MeasurementUnit = this.height) {
        return weight.value / (height.value * height.value);
    }
}
