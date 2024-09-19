import { Component } from '../core/Component';

export class Form extends Component {
  setup(props) {
    this.$rootElement = document.createElement('form');
    this.$rootElement.className = 'donate-form';
    
    const inputLabel = document.createElement('label');
    inputLabel.className = "donate-form__input-label";
    inputLabel.innerText = "Введите сумму в $";
    
    const donateInput = document.createElement('input');
    donateInput.className = "donate-form__donate-input";
    donateInput.name = "amount";
    donateInput.type = "number";
    donateInput.max = "100";
    donateInput.min = "1";
    donateInput.addEventListener('input', this.handleInput.bind(this));

    inputLabel.append(donateInput);

    const submitButton = document.createElement('button');
    submitButton.disabled = true;
    submitButton.className = "donate-form__submit-button";
    submitButton.type = "submit";
    submitButton.innerText = "Задонатить"
    this.$submitButton = submitButton;

    this.$rootElement.addEventListener('submit', this.handleSubmit.bind(this));

    this.$rootElement.append(inputLabel, submitButton)
  }

  handleInput(event) {
    const number = event.target.value;
    this.$submitButton.disabled = false;
    if (number > 100) {
      this.$submitButton.disabled = true;
    }

  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(Number(event.target.elements[0].value));
    event.target.elements[0].value = "";
    this.$submitButton.disabled = true;
  }
}
