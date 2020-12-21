import {
  ADD_COMENT,
  DELETE_COMENT
} from './actions';

const coment =  (state, action) => {
  switch (action.type) {
    case ADD_COMENT:
      const date = new Date();

      const newComent = {
        name: action.name,
        text: action.text,
        date: date.getDate() + '-' + (date.getMonth() + 1),
        time: date.getHours() + ':' + date.getMinutes(),
        id: (+date).toString(16)
      };

      return { coments: [...state.coments, newComent] };

    case DELETE_COMENT:
      return { coments: state.coments.filter((coment) => {
        return (coment.id !== action.id);
      }) }

    default:
      return state;
  }
}

export default coment;
