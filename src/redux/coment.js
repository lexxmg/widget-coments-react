import {
  ADD_COMENT,
  DELETE_COMENT
} from './actions';

let initialState = JSON.parse(localStorage.getItem('state') );
if (!initialState) {
  initialState = [];
} else {
  initialState = initialState.coments;
}

const coment =  (state = initialState, action) => {
  let newState = [...state];
  switch (action.type) {
    case ADD_COMENT:
      const id = (+new Date()).toString(16);

      const date = new Date();
      const time = date.getHours() + ':' + date.getMinutes();
      const toDay = date.getDate() + '-' + (date.getMonth() + 1);

      const newComent = {
        name: action.name,
        text: action.text,
        date: toDay,
        time: time,
        id: id
      };

      newState = [...newState, newComent];
      // newState.form = {...state.form};
      //
      // newState.form.valueInput = '';
      // newState.form.valueText = '';
      //
      //localStorage.setItem('state', JSON.stringify(newState));

      return newState;

    case DELETE_COMENT:
      newState = newState.filter((coment) => {
        return (coment.id !== action.id);
      });

      //localStorage.setItem('state', JSON.stringify(newStateDelete));

      // if (newStateDelete.coments.length === 0) {
      //   localStorage.clear();
      // }

      return newState;

    default:
      return state;
  }
}

export default coment;
