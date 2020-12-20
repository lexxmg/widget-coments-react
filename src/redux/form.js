import {
  NEW_VALUE_NAME,
  NEW_VALUE_TEXT
} from './actions';


let initialState = JSON.parse(localStorage.getItem('state') );
if (!initialState) {
  initialState = {
    valueInput: '',
    valueText: ''
  }
} else {
  initialState = initialState.form;
}

const form = (state = initialState, action) => {
  const newState = {...state};
  switch (action.type) {
    case NEW_VALUE_NAME:
      newState.valueInput = action.value;

      return newState;

    case NEW_VALUE_TEXT:
      newState.valueText = action.value;

      return newState;

    default:
      return state;
  }
}

export default form;
