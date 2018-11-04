import React, { Component } from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import { CustomerContext } from './FetchData';
import MaterialMaster from './pages/MaterialMaster/';
import NotFound from './NotFound';
import Welcome from './pages/Welcome/';

export default class Pages extends Component {
  render(){
    const { isLogin, toggleLoginFormHandler } = this.props;
    const { state: {isAuthorized} } = this.context;
    return (
        <Switch>
          <Route exact path="/" render={() => (
            <Welcome
              isLoginHandler={toggleLoginFormHandler}
              isLogin={isLogin}
            />)}
          />
          <Route path="/materialMaster" render={() => (
            isAuthorized
              ? <MaterialMaster disableLogin={toggleLoginFormHandler}/>
              : <Redirect to="/" />
          )}/>
          <Route component={NotFound} />
        </Switch>
    );
  }
};

Pages.contextType = CustomerContext;