import { Component } from 'react';
import css from './app.module.css';
import Phonebook from './Phonebook/Phonebook';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  createContact = data => {
    const user = {
      ...data,
      id: nanoid(),
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, user],
    }));
  };

  handleChange = ({ target }) => {
    this.setState({ filter: target.value });
  };

  handleDelete = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const filteted = this.state.contacts.filter(contact =>
      contact.name.includes(this.state.filter)
    );
    return (
      <div>
        <h1 className={css.title}>Phonebook</h1>
        <Phonebook
          createContact={this.createContact}
          data={this.state.contacts}
        />
        <h2 className={css.title}>Contacts</h2>
        <Filter filter={this.state.filter} onChange={this.handleChange} />
        <Contacts data={filteted} handleDelete={this.handleDelete} />
      </div>
    );
  }
}

export default App;
