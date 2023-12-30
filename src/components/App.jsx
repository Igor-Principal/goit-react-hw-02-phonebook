import { Component } from 'react';
import Phonebook from './Phonebook/Phonebook';
import Contacts from './Contacts/Contacts';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  render() {
    return (
      <div>
        <Phonebook />
        <Contacts />
      </div>
    );
  }
}

export default App;
