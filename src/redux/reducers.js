import {
  ADD_COMENT,
  DELETE_COMENT,
  NEW_VALUE_NAME,
  NEW_VALUE_TEXT
} from './actions';


const reducer =  (state, action) => {
  const newState = {...state};
  switch (action.type) {
    case ADD_COMENT:
      const id = ( +new Date() ).toString(16);

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

      newState.coments = [...state.coments, newComent];

      newState.form.valueInput = '';
      newState.form.valueText = '';

      localStorage.setItem('state', JSON.stringify(newState));

      return newState;

    case DELETE_COMENT:
      newState.coments = state.coments.filter((coment) => {
        return (coment.id !== action.id);
      });

      localStorage.setItem('state', JSON.stringify(newState));

      if (newState.coments.length === 0) {
        localStorage.clear();
      }

      return newState;

    case NEW_VALUE_NAME:
      newState.form.valueInput = action.value;
      // console.log(state);
      //localStorage.setItem('state', JSON.stringify(newState));
      return newState;

    case NEW_VALUE_TEXT:
      newState.form.valueText = action.value;
      //console.log(state);
      //localStorage.setItem('state', JSON.stringify(state));
      return newState;

    default:
      return state;
  }
}

export default reducer;
