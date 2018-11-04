import React, { Component } from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import { CustomerContext } from './FetchData';
import MaterialMaster from './pages/MaterialMaster';
import NotFound from './NotFound';
import Welcome from './Welcome';

export default class Pages extends Component {
  render(){
    const { disableLogin } = this.props;
    const { state: {isAuthorized} } = this.context;
    return (
        <Switch>
          <Route exact path="/" component={Welcome}/>
          <Route path="/materialMaster" render={() => (
            isAuthorized
              ? <MaterialMaster disableLogin={disableLogin}/>
              : <Redirect to="/" />
          )}/>
          <Route component={NotFound} />
        </Switch>
    );
  }
};

Pages.contextType = CustomerContext;