import { createStore } from 'redux';
import coment from './coment';

let initialState = JSON.parse(localStorage.getItem('state') );
if (!initialState) {
  initialState = {
    coments: []
    }
  }

const store = createStore(coment, initialState);

export default store;
