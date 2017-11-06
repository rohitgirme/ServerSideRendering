import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from './Layout';
import { BrowserRouter, StaticRouter } from 'react-router-dom';
import routes from '../routes';

import { NotFoundPage } from './NotFoundPage';

class App extends React.Component {

  render() {
    let rc = routes.map((r) => <Route key={r.path} exact path={r.path} component={r.component}/>);

    if (this.props.server) {
      return (
        <StaticRouter location={this.props.location} context={this.props.context}>
          <Layout>
            <Switch>
              {rc}
              <Route component={NotFoundPage} />
            </Switch>
          </Layout>
        </StaticRouter>
      );
    }

    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            {rc}
            <Route component={NotFoundPage} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
