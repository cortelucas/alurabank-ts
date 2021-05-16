class NegotiationController {
  private _inputDate;
  private _inputQuant;
  private _inputValue;

  constructor () {
    this._inputDate = document.querySelector('#data');
    this._inputQuant = document.querySelector('#quantidade');
    this._inputValue = document.querySelector('#valor');
  }

  add(event) {
    event.preventDefault();
    const negotiation = new Negotiation(this._inputDate.value, this._inputQuant.value, this._inputValue.value);
    console.log(negotiation);
  }
}