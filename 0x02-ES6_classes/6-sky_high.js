import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  // Getter
  get floors() {
    return this._floors;
  }

  // Setter
  set floors(newFloors) {
    this._floors = newFloors;
  }

  // Override the evacuationWarningMessage method
  evacuationWarningMessage() {
    return `Evacuate the ${this.floors} floors slowly`;
  }
}
