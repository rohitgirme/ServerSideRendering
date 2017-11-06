# ServerSideRendering

## Overview
This is a sample app to show how server side rendering works with React, Redux, React Router
and NodeJS with Express.

## Contents
The app is built using React, Redux and React Router.
The first time asset is requested, express server fetches data and renders the UI on the server.
All the updates, interactions there after are handled by the React app in the browser itself.
This helps reduce initial load time and also with SEO.

## Available commands

Available commands to run with `npm run`:

 - `start`: start the server
 - `build`: build the production package
 - `build:dev`: build the dev package
