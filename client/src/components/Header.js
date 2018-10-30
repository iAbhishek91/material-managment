import React, { Fragment } from 'react';
import ReactDom from 'react-dom';
import * as style from '../style.css';
import Login from './Login';

export default class Header extends React.PureComponent{
  state = {
    isLogInFormVisible : false,
  }

  clickHandler = () => {
    this.setState({
      isLogInFormVisible: !this.state.isLogInFormVisible,
    });
  }

  componentDidMount() {
    console.log('<Header /> componentDidMount');
  }

  render() {
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
          <p onClick={this.clickHandler}>
            Login
          </p>
        </div>
        {
          this.state.isLogInFormVisible && (
            <Login />
          )
        }
      </Fragment>
    );
  };
};