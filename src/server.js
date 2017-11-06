/* eslint no-console: "off"*/

import path from 'path';
import fs from 'fs';
import { Server } from 'http';
import Express from 'express';

// Router
import * as cars from './cars';
import * as serverRender from './render';

const app = new Express();
const server = new Server(app);

// use ejs templates
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// define the folder that will be used for static assets
app.use(Express.static(path.join(__dirname, 'static')));

app.use('/cars', cars);
app.use('*', serverRender)

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
