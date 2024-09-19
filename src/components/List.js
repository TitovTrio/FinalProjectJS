import { Component } from '../core/Component';

export class List extends Component {
  setup() {
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donates-container';
    
    const containerTitle = document.createElement('h2');
    containerTitle.className = "donates-container__title";
    containerTitle.innerText = "Список донатов";

    const donatesContainer = document.createElement('div');
    this.$donatesContainer = donatesContainer;
    
    this.$rootElement.append(containerTitle, donatesContainer)
  }

  addItem(item) {
    this.$donatesContainer.append(new Com)
  }
}