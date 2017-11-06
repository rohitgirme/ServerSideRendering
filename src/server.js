/* eslint no-console: "off"*/

import path from 'path';
import fs from 'fs';
import { Server } from 'http';
import Express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { matchPath } from 'react-router-dom';
import App from './components/App';
import routes from './routes';
import createStore from './store';
import { Provider } from 'react-redux';

const app = new Express();
const server = new Server(app);
const store = createStore();

// use ejs templates
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// define the folder that will be used for static assets
app.use(Express.static(path.join(__dirname, 'static')));

app.get('/cars', function (req, res) {
  fs.readFile(path.join(__dirname, 'data','cars.json'), function (err, data) {
    if (err) {
      console.log("fetching cars API failed: " + err);
      res.status(500).send();
    }

    res.status(200).send(JSON.parse(data));
  })
});

// universal routing and rendering ONLY for GET calls
app.get('*', (req, res) => {
  let markup = '';
  let status = 200;

  const context = {};
  let unsubscribe;

  routes.some(function (route) {
    const match = matchPath(req.url, {
      path: route.path,
      exact: true
    });
    if (match) {
      const comp = route.component;
      if (comp.fetchData) {
        unsubscribe = store.subscribe(handleChange);
        comp.fetchData(store);
      }

    }
  });

  function handleChange() {
    try {
      const state = store.getState();
      markup = renderToString(
        <Provider store={store}>
          <App location={req.url} server={true} context={context}/>
        </Provider>
      );
      unsubscribe();

      // context.url will contain the URL to redirect to if a <Redirect> was used
      if (context.url) {
        return res.redirect(302, context.url);
      }

      if (context.is404) {
        status = 404;
      }

      return res.status(status).render('index', {markup, state:JSON.stringify(state)});
    }
    catch (e) {
      console.log("caught error", e);
    }

  }

});

// start the server
const port = process.env.PORT || 3000;
server.listen(port, (err) => {
  if (err) {
    return console.error(err);
  }
  return console.info(
    `
      Server running on http://localhost:${port}
    `);
});
