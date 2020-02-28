import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { ServiceProvider } from "./components/service-context";
import ServiceApi from "./services/service-api";

import './styles.css' // <- change './index.css' to './styles.css'

import App from './components/app/app';
import store from "./store";
import ErrorBoundry from "./components/error-boundry";

const serviceApi = new ServiceApi();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <ServiceProvider value={serviceApi}>
                <Router>
                    <App />
                </Router>
            </ServiceProvider>
        </ErrorBoundry>
    </Provider>,
    document.getElementById('root'));
