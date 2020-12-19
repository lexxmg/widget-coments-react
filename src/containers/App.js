import React from 'react';
import './App.css';
import Coment from '../components/coment/Coment';
import Form from '../components/form/Form';
import { connect } from 'react-redux';
import {
  addComentActionCreator,
  newValueNameActionCreator,
  newValueTextActionCreator,
  deleteComentActionCreator
} from '../redux/actions';


let App = ({ valueInput,
             valueText,
             coments,
             addComent,
             newValueName,
             newValueText,
             deliteComent
           }) => {
  return (
    <div className="wrapper fixed-container">

      <div className="coment-wraper">
        {
          coments.map(( {id, name, text, date, time} ) => {
            return (
              <Coment
                key={id}
                name={name}
                text={text}
                date={date}
                time={time}
                id={id}
                deliteComent={deliteComent}
              />
            )
          })
        }
      </div>

      <Form
        valueInput={valueInput}
        valueText={valueText}
        addComent={addComent}
        newValueName={newValueName}
        newValueText={newValueText}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    valueInput: state.form.valueInput,
    valueText: state.form.valueText,
    coments: state.coments
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addComent: (e) => {
      e.preventDefault();
      dispatch( addComentActionCreator() );
    },
    newValueName: (e) => {
      dispatch( newValueNameActionCreator(e.target.value) );
    },
    newValueText: (e) => {
      dispatch( newValueTextActionCreator(e.target.value) );
    },
    deliteComent: (id) => {
      dispatch( deleteComentActionCreator(id) );
    }
  }
}

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
