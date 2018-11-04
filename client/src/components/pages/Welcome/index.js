import React from 'react';
import { CustomerContext } from '../../FetchData';
import Login from './Login';

export default class Welcome extends React.PureComponent {
  clickHandler = ( isLoginHandler ) => {
    isLoginHandler();
  }

  render(){
    const { isLogin, isLoginHandler } = this.props;
    return (
      <div className="page">
        <h2>Welcome!!</h2>
        <p>please login</p>
        <input
          type="submit"
          className="box-1"
          onClick={this.clickHandler.bind( this, isLoginHandler )}
          value='Login'
        />
        {
          isLogin && (
            <Login />
          )
        }
      </div>
    )
  }
};

Welcome.contextType = CustomerContext;