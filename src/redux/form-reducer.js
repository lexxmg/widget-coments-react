const ADD_COMENT = 'ADD-COMENT';
const DELETE_COMENT = 'DELETE-COMENT';
const NEW_VALUE_NAME = 'NEW-VALUE-NAME';
const NEW_VALUE_TEXT = 'NEW-VALUE-TEXT';

export const addComentActionCreator = () => {
  return {type: ADD_COMENT};
}

export const newValueNameActionCreator = (value) => {
  return {type: NEW_VALUE_NAME, value: value};
}

export const newValueTextActionCreator = (value) => {
  return {type: NEW_VALUE_TEXT, value: value};
}

export const deleteComentActionCreator = (id) => {
  return {type: DELETE_COMENT, id: id };
}


const initialState = {
  coments: [],
  form: {
    valueInput: '',
    valueText: 'text'
  }
}

const formReducer =  (state = initialState, action) => {
  console.log(state + ' ' + 'reducer');
  switch (action.type) {
    case ADD_COMENT:
      const id = (+new Date()).toString(16);

      const date = new Date();
      const time = date.getHours() + ':' + date.getMinutes();
      const toDay = date.getDate() + '-' + (date.getMonth() + 1);

      const newComent = {
        name: state.form.valueInput,
        text: state.form.valueText,
        date: toDay,
        time: time,
        id: id
      };
      state.coments.push(newComent);

      state.form.valueInput = '';
      state.form.valueText = '';

      return state;
    case DELETE_COMENT:
      state.coments = state.coments.filter((coment) => {
        return (coment.id !== action.id);
      });
      return state;

    case NEW_VALUE_NAME:
    console.log(action.value);
      state.form.valueInput = action.value;
      console.log(state);
      return state;

    case NEW_VALUE_TEXT:
      state.form.valueText = action.value;
      console.log(state);
      return state;

    default:
      return state;
  }
}

export default formReducer;
