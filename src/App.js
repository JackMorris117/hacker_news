import React, { Component } from 'react';
import NewsContainer from './containers/NewsContainer'
import './App.css';
import { render } from '@testing-library/react';


class App extends Component {
  render() {
    return (
      <NewsContainer />
    );
  }
}

export default App;
