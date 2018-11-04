import React, { Fragment } from 'react';
import Login from './Login';
import { CustomerContext } from './FetchData';

export default class Header extends React.PureComponent{
  clickHandler = (action, setState, isLoginHandler) => {
    if(action === 'Signout') setState({ isAuthorized : false });
    isLoginHandler();
  }

  componentDidMount() {
    console.log('<Header /> componentDidMount');
  }

  render() {
    const { isLogin, isLoginHandler } = this.props;
    const { state:{isAuthorized}, setState } = this.context;
    const userAction = isAuthorized === true ? 'Signout' : 'Login';
    return (
      <Fragment>
        <div id="header">
          <img
            src="../../resources/images/clientLogo.png"
            height="50px"
            width="50px"
          >
          </img>
          <h1 className="cls-center">
            Material Management
          </h1>
          <p onClick={this.clickHandler.bind(
            this,
            userAction,
            setState,
            isLoginHandler,
          )}>
            {userAction}
          </p>
        </div>
        {
          isLogin && (
            <Login />
          )
        }
      </Fragment>
    );
  };
};

Header.contextType = CustomerContext;