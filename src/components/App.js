import { Component } from '../core/Component';
import { Form } from './Form';
import { List } from './List';
import { ListItem } from './ListItem';

export class App extends Component {
  setup(props) { 
    this.state = { 
      donationCounter: 0
    };
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'app';
    
    const header = document.createElement('h1');
    header.innerText = "Итого: $" ;
    header.classList = "total-amount";
    
    const totalDonations = document.createElement('span');
    totalDonations.innerText = this.state.donationCounter;
    this.$totalDonations = totalDonations;
    
    header.append(totalDonations);
    this.$rootElement.append(header);

    const donateForm = new Form({onSubmit: this.onItemCreate.bind(this)});
    this.$rootElement.appendChild(donateForm.$rootElement);
    
    const donateList = new List({onSubmit: this.onItemCreate.bind(this)});
    this.$donateList = donateList.$rootElement;
    this.$rootElement.appendChild(donateList.$rootElement);
  }
  
  onItemCreate(amount) {
    this.$totalDonations.innerText = Number(this.$totalDonations.innerText) + amount;
    const donation = new ListItem({cash: amount, onClick: this.onDeleteButtonClick.bind(this)});
    this.$donateList.appendChild(donation.$rootElement)
  }

  onDeleteButtonClick(event) {
    const targetDonation = event.target.closest('.donate-item');
    this.$totalDonations.innerText -= targetDonation.dataset.cash
    targetDonation.remove()
  }
}
