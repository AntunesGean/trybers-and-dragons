import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private static _archetypeInstance = 0;
  private _energyType: EnergyType = 'mana';

  constructor(name: string) {
    super(name);
    Mage._archetypeInstance += 1;
  }

  static createdArchetypeInstances(): number {
    return Mage._archetypeInstance;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Mage;