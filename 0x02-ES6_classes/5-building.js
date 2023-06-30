export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    if (this.constructor === Building && this.evacuationWarningMessage === undefined) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    if (this.constructor !== Building && typeof this.evacuationWarningMessage !== 'function') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  // Getter
  get sqft() {
    return this._sqft;
  }

  // Setter
  set sqft(newSqft) {
    this._sqft = newSqft;
  }
}
