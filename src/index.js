import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from "react-redux";
import { createStore } from 'redux';
import index from "./reducers";
import injectTapEventPlugin from 'react-tap-event-plugin';  
import { composeWithDevTools } from 'redux-devtools-extension';
import 'font-awesome/css/font-awesome.min.css';

injectTapEventPlugin();
var store=createStore(index, composeWithDevTools(
    
    // other store enhancers if any
  ));
ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
