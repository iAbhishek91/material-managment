import React, {PureComponent} from 'react';

export const CustomerContext = React.createContext();
export default class Provider extends PureComponent {
  state = {
    customers: []
  };

  componentWillMount() {
    // this is possible as
    //proxy is configured in package.json
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
        }}
      >
        {this.props.children}
      </CustomerContext.Provider>
    );
  }
};