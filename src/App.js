import React, { Component } from 'react';
import BarChart from './barchart';

class App extends Component {
  render() {
    return (
      <BarChart data={[2,8,1,3,7,5,1]} size={[500,500]} />
    );
  }
}

export default App;
