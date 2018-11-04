import React, {Component} from 'react';

export const CustomerContext = React.createContext();
export default class Provider extends Component {
  state = {
    customers: []
  };

  setStates = (obj) => {
    this.setState({...obj});
  }

  componentWillMount() {
    // this is possible as
    // proxy is configured in package.json
    console.log('<App /> componentDidMount');
    fetch('/api/customers')
      .then(data => data.json())
      .then(customers =>
        this.setState({ customers }, () =>
          console.log('customers fetched', customers)
        )
      );
  };

  render(){
    return (
      <CustomerContext.Provider
        value={{
          state: this.state,
          setState: this.setStates,
        }}
      >
        {this.props.children}
      </CustomerContext.Provider>
    );
  }
};