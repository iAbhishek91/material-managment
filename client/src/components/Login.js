import React, { Component } from 'react';
import ReactDom from 'react-dom';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      customers: []
    };
  }

  componentDidMount() {
    // this is possible as
    //proxy is configured in package.json
    fetch('/api/customers')
      .then(data => data.json())
      .then(customers =>
        this.setState({ customers }, () =>
          console.log('customers fetched', customers)
        )
      );
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <p />
      </div>
    );
  }
}

export default Login;
