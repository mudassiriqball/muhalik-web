import React, { Component } from 'react';

import Select from 'react-select';
import axios from 'axios'



const options = [
  { value: 'chocolat', label: 'Chocolat' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]


class Orders extends Component {
  state = {
    files: []
  }

  fileSelectedHandler = (e) => {
    this.setState({ files: [...this.state.files, ...e.target.files] })
  }
  render() {
    return (
      <>
        <form>

        </form>
      </>
    );
  }
}

export default Orders;