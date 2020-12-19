export const ADD_COMENT = 'ADD-COMENT';
export const DELETE_COMENT = 'DELETE-COMENT';
export const NEW_VALUE_NAME = 'NEW-VALUE-NAME';
export const NEW_VALUE_TEXT = 'NEW-VALUE-TEXT';


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
