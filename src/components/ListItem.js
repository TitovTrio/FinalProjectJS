import { Component } from '../core/Component';
import moment from 'moment';
import { DeleteButton } from './DelleteButton';

export class ListItem extends Component {
  setup(props) {
    const date = moment().format('DD/MM/YYYY, HH:mm:ss');

    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donate-item';
    this.$rootElement.innerText = `${date} - $`;
    this.$rootElement.dataset.cash = props.cash;
    
    const cash = document.createElement('b');
    cash.innerText = props.cash;
    
    const deleteButton = new DeleteButton().$rootElement
    deleteButton.addEventListener('click', props.onClick);

    this.$rootElement.append(cash, deleteButton);
  }
}
