import React from 'react';
import './App.css';
import Coment from '../components/coment/Coment';
import Form from '../components/form/Form';

const App = (props) => {
  return (
    <div className="wrapper fixed-container">

      <div className="coment-wraper">
        {
          props.state.coments.map(( {id, name, text, date, time} ) => {
            return (
              <Coment
                key={id}
                name={name}
                text={text}
                date={date}
                time={time}
                id={id}
                dispatch={props.dispatch}
              />
            )
          })
        }
      </div>

      <Form
        valueInput={props.state.form.valueInput}
        valueText={props.state.form.valueText}
        dispatch={props.dispatch}
      />
    </div>
  );
}

export default App;
