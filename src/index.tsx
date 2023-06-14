import React from 'react';
import ReactDOM from 'react-dom'
import App from './App';
import {store} from './store';
import { Provider } from 'react-redux';


// const container = document.getElementById('root')
// const root = createRoot(container)

ReactDOM.render(
      <Provider store={store}>
      <App />
      </Provider>,
      document.getElementById('root')
);
