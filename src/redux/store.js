import { createStore, combineReducers } from 'redux';
import formReducer from './form-reducer';


// const reducers = combineReducers({
//   state: formReducer
// });

const initialState = {
  coments: [],
  form: {
    valueInput: '',
    valueText: 'text-2'
  }
}

const store = createStore(formReducer, initialState);

export default store;
