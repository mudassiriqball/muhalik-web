import React, { Component } from 'react';

import Select from 'react-select';

const options = [
  { value: 'chocolat', label: 'Chocolat' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]


class Orders extends Component {
  state = {  }
  render() { 
    return ( 
      <Select
    isMulti
    name="colors"
    options = {options}
    className="basic-multi-select"
    classNamePrefix="select"
  />
     );
  }
}
 
export default Orders;