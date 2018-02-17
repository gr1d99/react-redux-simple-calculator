// react
import React, { Component } from 'react';

// container
import CalculatorForm from '../containers/calculator/Form';

// css
import '../static/app.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1 className="text-center page-header">Simple React Redux Calculator</h1>
          <CalculatorForm/>
      </div>
    );
  }
}

export default App;
