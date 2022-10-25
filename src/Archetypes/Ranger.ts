import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private static _archetypeInstance = 0;
  private _energyType: EnergyType = 'stamina';

  constructor(name: string) {
    super(name);
    Ranger._archetypeInstance += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger._archetypeInstance;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Ranger;