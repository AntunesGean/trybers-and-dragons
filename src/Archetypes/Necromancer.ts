import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private static _archetypeInstance = 0;
  private _energyType: EnergyType = 'mana';

  constructor(name: string) {
    super(name);
    Necromancer._archetypeInstance += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer._archetypeInstance;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Necromancer;