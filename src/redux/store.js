import { createStore } from 'redux';
import formReducer from './form-reducer';


// const reducers = combineReducers({
//   state: formReducer
// });
// JSON.parse(localStorage.getItem('state') );
// localStorage.setItem('state', JSON.stringify(this.state));

let initialState = JSON.parse(localStorage.getItem('state') );
if (!initialState) {
  initialState = {
    coments: [],
    form: {
      valueInput: '',
      valueText: ''
    }
  }
}


const store = createStore(formReducer, initialState);

export default store;
