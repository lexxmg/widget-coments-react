export const ADD_COMENT = 'ADD-COMENT';
export const DELETE_COMENT = 'DELETE-COMENT';


export const addComentActionCreator = (name, text) => {
  return {type: ADD_COMENT, name: name, text: text};
}

export const deleteComentActionCreator = (id) => {
  return {type: DELETE_COMENT, id: id };
}
