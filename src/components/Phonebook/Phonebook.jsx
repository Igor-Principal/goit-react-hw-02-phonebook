import { Component } from 'react';
import css from './phonebook.module.css';

class Phonebook extends Component {
  state = {
    name: '',
    number: '',
  };
  render() {
    return (
      <form className={css.form}>
        <h1 className={css.title}>Phonebook</h1>
        <label className={css.titleSmall} htmlFor="name">
          Name
        </label>
        <input
          className={css.inputName}
          type="text"
          id="name"
          name="name"
          required
        />
        <label className={css.titleSmall} htmlFor="number">
          Number
        </label>
        <input
          className={css.inputTel}
          type="tel"
          name="number"
          id="nomber"
          required
        />
        <button className={css.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default Phonebook;
