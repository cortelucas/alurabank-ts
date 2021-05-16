class Negotiation {
    constructor(_date, _quant, _value) {
        this._date = _date;
        this._quant = _quant;
        this._value = _value;
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
