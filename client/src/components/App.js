import React, { PureComponent, Fragment } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';
import FetchData from './FetchData';

class App extends PureComponent {
  render() {
    return (
        <FetchData>
          <div>
            <Header />
          </div>
        </FetchData>
    );
  }
}

export default App;
