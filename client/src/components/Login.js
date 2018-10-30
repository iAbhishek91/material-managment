import React, { PureComponent } from 'react';
import { CustomerContext } from './FetchData';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import MaterialMaster from './pages/MaterialMaster';

export default class Login extends PureComponent {
  state = {
    username: '',
    password: '',
  }

  onClickHandler = ( customers ) => {
    const isAuthorized = customers.map(
      customer => (
        customer.firstName === this.state.username
        && customer.lastName === this.state.password
      )
    ).indexOf(true);
    console.log(isAuthorized);
    this.setState({ isAuthorized });
  }

  componentDidMount(){
    console.log('<Login /> componentDidMount');
  }

  render(){
    return (
      <div id="loginForm" className="container">
        <input
          className="form-element"
          type="text"
          placeholder="please enter Username!"
          onChange={(e)=>{this.setState({username: e.target.value})}}
        />
        <input
          className="form-element"
          type="text"
          placeholder="please enter Password!"
          onChange={(e)=>{this.setState({password: e.target.value})}}
        />
        <CustomerContext.Consumer>
          {
            (context) => (
              <input
                type="submit"
                className="form-element button"
                onClick={this.onClickHandler.bind(this, context.state.customers)}
                value="Login"
              />
            )
          }
        </CustomerContext.Consumer>
        
      </div>
    )
  }
}
