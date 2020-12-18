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



const formReducer =  (state, action) => {
  //console.log(`${state} reducer`);
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
      const newState = {};
      newState.coments = [...state.coments, newComent];
      newState.form = {...state.form};

      newState.form.valueInput = '';
      newState.form.valueText = '';

      localStorage.setItem('state', JSON.stringify(newState));

      return newState;

    case DELETE_COMENT:
      const newStateDelete = {};
      newStateDelete.form = {...state.form};
      newStateDelete.coments = state.coments.filter((coment) => {
        return (coment.id !== action.id);
      });

      localStorage.setItem('state', JSON.stringify(newStateDelete));

      if (newStateDelete.coments.length === 0) {
        localStorage.clear();
      }

      return newStateDelete;

    case NEW_VALUE_NAME:
      const newStateValueName = {};
      newStateValueName.coments = [...state.coments];
      newStateValueName.form = {...state.form};
      newStateValueName.form.valueInput = action.value;
      // console.log(state);
      //localStorage.setItem('state', JSON.stringify(newState));
      return newStateValueName;

    case NEW_VALUE_TEXT:
      const newStateValueText = {};
      newStateValueText.coments = [...state.coments];
      newStateValueText.form = {...state.form};
      newStateValueText.form.valueText = action.value;
      //console.log(state);
      //localStorage.setItem('state', JSON.stringify(state));
      return newStateValueText;

    default:
      return state;
  }
}

export default formReducer;
