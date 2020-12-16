import { createStore, combineReducers } from 'redux';
import formReducer from './form-reducer';


const reducers = combineReducers({
  state: formReducer
});

const store = createStore(reducers);

export default store;
