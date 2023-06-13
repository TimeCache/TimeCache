import React from 'react';
import ReactDOM from 'react-dom'
import { store } from './store'
// import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'
import App from './App';


// const container = document.getElementById('root')
// const root = createRoot(container)

// root.render(
//       <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)