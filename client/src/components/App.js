import React, { Component, Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Context from './FetchData';
import Pages from './Pages';
import Header from './Header';

class App extends Component {
  state = {
    isLogInFormVisible : false,
  }

  toggleLoginVisibilityHandler = () => (
    this.setState({
      isLogInFormVisible: !this.state.isLogInFormVisible,
    })
  )
 
  render() {
    return (
      <Context>
        <BrowserRouter>
          <Fragment>
            <Header
              isLoginHandler={this.toggleLoginVisibilityHandler}
              isLogin={this.state.isLogInFormVisible}
            />
            <Pages disableLogin={this.toggleLoginVisibilityHandler}/>
          </Fragment>
        </BrowserRouter>
      </Context>
    );
  }
}

export default App;
