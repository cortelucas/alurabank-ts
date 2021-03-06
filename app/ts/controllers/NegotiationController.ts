class NegotiationController {
  private _inputDate : HTMLInputElement;
  private _inputQuant: HTMLInputElement;
  private _inputValue: HTMLInputElement;

  constructor () {
    this._inputDate  = <HTMLInputElement>document.querySelector('#data');
    this._inputQuant = <HTMLInputElement>document.querySelector('#quantidade');
    this._inputValue = <HTMLInputElement>document.querySelector('#valor');
  }

  add(event: Event) {
    event.preventDefault();

    const negotiation = new Negotiation(
      new Date(this._inputDate.value.replace(/-/g, ',')), 
      parseInt(this._inputQuant.value), 
      parseFloat(this._inputValue.value)
    );
    console.log(negotiation);
  }
}