import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';
import App from './containers/App';
import store from './redux/store';
import reportWebVitals from './reportWebVitals';

const render = () => {
  console.log(store.getState());
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={ store.getState() }
        dispatch={ store.dispatch.bind(store) }
        />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

render();
store.subscribe(render);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
