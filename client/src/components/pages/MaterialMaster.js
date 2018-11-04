import React, { PureComponent } from 'react';

export default class MaterialManagment extends PureComponent {
  componentDidMount(){
    console.log('<MaterialMaster /> componentDidMount');
  }

  componentWillMount(){
    this.props.disableLogin();
  }
  
  render(){
    return (
      <h1>Material Master</h1>
    )
  }
};
