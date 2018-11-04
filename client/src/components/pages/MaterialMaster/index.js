import React, { PureComponent, Fragment } from 'react';

export default class MaterialManagment extends PureComponent {
  componentDidMount(){
    console.log('<MaterialMaster /> componentDidMount');
  }

  componentWillMount(){
    this.props.disableLogin();
  }
  
  render(){
    return (
      <div className="page">
        <h1>Material Master</h1>
      </div>
    )
  }
};
