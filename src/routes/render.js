import routes from './routes';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { matchPath } from 'react-router-dom';
import App from './components/App';
import createStore from './store';
import { Provider } from 'react-redux';

import Express from 'express';

const router = Express.Router()
const store = createStore();

// universal routing and rendering ONLY for GET calls
router.get('*', (req, res) => {
    let markup = '';
    let status = 200;

    const context = {};
    let unsubscribe;

    routes.some((route) => {
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
                    <App location={req.url} server={true} context={context} />
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

            return res.status(status).render(
                'index',
                { markup, state: JSON.stringify(state) }
            );
        }
        catch (e) {
            console.log("caught error", e);
        }
    }
});