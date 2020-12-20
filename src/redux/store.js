import { createStore, combineReducers } from 'redux';
//import formReducer from './form-reducer';
import coment from './coment';
import form from './form';


const reducers = combineReducers({
  coments: coment,
  form: form
});
// JSON.parse(localStorage.getItem('state') );
//localStorage.setItem('state', JSON.stringify(this.state));

// let initialState = JSON.parse(localStorage.getItem('state') );
// if (!initialState) {
//   initialState = {
//     coments: [],
//     form: {
//       valueInput: '',
//       valueText: ''
//     }
//   }
// }


const store = createStore(reducers);

export default store;
