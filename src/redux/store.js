import { createStore } from 'redux';
import reducer from './reducers';


// const reducers = combineReducers({
//   state: formReducer
// });
// JSON.parse(localStorage.getItem('state') );
//localStorage.setItem('state', JSON.stringify(this.state));

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


const store = createStore(reducer, initialState);

export default store;
