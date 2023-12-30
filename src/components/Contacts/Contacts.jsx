import { Component } from 'react';
import css from './contacts.module.css';

class Contacts extends Component {
  state = {};
  render() {
      return <>
          <h2 className={css.title}>Contacts</h2>
          <ul className={css.list}></ul>
      </>;
  }
}

export default Contacts;
