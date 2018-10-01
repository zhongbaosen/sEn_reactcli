import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
// import App from './App';
import Main from './main'
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import configStore from './store/configStore.js'

const store = configStore();

ReactDOM.render(
    <Provider store={store}>
        <Main/>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();