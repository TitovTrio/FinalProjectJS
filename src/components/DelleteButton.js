import { Component } from '../core/Component';


export class DeleteButton extends Component {
  setup(props) {
    this.$rootElement = document.createElement('button');
    this.$rootElement.className = "delete-button";
    this.$rootElement.textContent = "Удалить";
  }
}
