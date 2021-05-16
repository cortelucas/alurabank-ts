class NegotiationController {
    constructor() {
        this._inputDate = document.querySelector('#data');
        this._inputQuant = document.querySelector('#quantidade');
        this._inputValue = document.querySelector('#valor');
    }
    add(event) {
        event.preventDefault();
        const negotiation = new Negotiation(new Date(this._inputDate.value.replace(/-/g, ',')), parseInt(this._inputQuant.value), parseFloat(this._inputValue.value));
        console.log(negotiation);
    }
}
