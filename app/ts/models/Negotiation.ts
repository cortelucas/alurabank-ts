class Negotiation {
  private _date;
  private _quant;
  private _value;
  constructor (date, quant, value) {
    this._date = date;
    this._quant = quant;
    this._value = value;
  }

  get date() {
    return this._date;
  }

  get quant() {
    return this._quant;
  }

  get value() {
    return this._value;
  }

  get volume() {
    return this._quant * this._value;
  }
}