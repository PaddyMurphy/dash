import React from 'react';
import {Route} from 'react-router-dom';
import App from 'App';

export default (
  <React.Fragment>
    <Route path="/index.html" component={App} />
    <Route exact path="/" component={App} />
    <Route path="/dash" component={App} />
    {/* <Route path="*" component={Error404Page} /> */}
  </React.Fragment>
);
