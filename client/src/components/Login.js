import React, { PureComponent } from 'react';
import { CustomerContext } from './FetchData';
import { Redirect } from 'react-router-dom';

export default class Login extends PureComponent {
  state = {
    username: '',
    password: '',
  }

  onClickHandler = ( data ) => {
    const {
      state: { customers },
      setState,
    } = data;
   
    const isAuthorized = customers.map(
      customer => (
        customer.firstName === this.state.username
        && customer.lastName === this.state.password
      )
    ).indexOf(true) === 0;
   
    console.log(isAuthorized);
    setState({isAuthorized});
  }

  componentDidMount(){
    console.log('<Login /> componentDidMount');
  }

  render(){
    const context = this.context;
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
        <input
          type="submit"
          className="form-element button"
          onClick={this.onClickHandler.bind(this, context)}
          value="Login"
        />
        {
          context.state.isAuthorized && (
            <Redirect to="/materialMaster" />
          )
        }
      </div>
    )
  }
}

// subscribing to context
Login.contextType = CustomerContext;
