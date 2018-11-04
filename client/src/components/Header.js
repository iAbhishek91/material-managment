import React from 'react';
import { CustomerContext } from './FetchData';

export default class Header extends React.Component{
  signOffHandler = (setState) => {
    setState({ isAuthorized : undefined });
  }

  render() {
    const { state: {isAuthorized}, setState } = this.context;
    return (
      <div className="page-header">
        <div id="header">
          <img
            src="../../resources/images/clientLogo.png"
            height="50px"
            width="50px"
            className="box-1"
            >
          </img>
          <h1 className="cls-center box-1" id="heading-text">
            Material Management
          </h1>
          <p onClick={this.signOffHandler.bind(this, setState)}>{isAuthorized && 'Sign out'}</p>
        </div>
      </div>
    );
  };
};

Header.contextType = CustomerContext;