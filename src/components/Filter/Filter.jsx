import { Component } from 'react';

class Filter extends Component {
  state = {};
  render() {
    return (
      <input
        type="text"
        name="filter"
        value={this.props.filter}
        onChange={this.props.onChange}
        placeholder="Write name"
      />
    );
  }
}

export default Filter;
