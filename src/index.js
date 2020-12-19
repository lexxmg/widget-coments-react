import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';
import App from './containers/App';
import store from './redux/store';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';

const state1 = store.getState();
const state2 = store.getState();
console.log(state1);
console.log(`state1 === state2 ${state1 === state2}`);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

store.subscribe( () => {
  const state3 = store.getState();
  console.log(state1);
  console.log(state3);
  console.log(`state1 === state3 ${state1 === state3}`);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
