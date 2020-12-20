import {
  NEW_VALUE_NAME,
  NEW_VALUE_TEXT
} from './actions';

const value = {
  valueInput: '',
  valueText: ''
};

const form = (state = value, action) => {
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
