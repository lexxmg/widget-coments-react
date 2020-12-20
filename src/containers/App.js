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


let App = ({
            valueInput,
            valueText,
            addComent,
            newValueName,
            newValueText,
            coments,
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
        addComent={addComent}
        valueInput={valueInput}
        valueText={valueText}
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
      const name = e.target.userName.value;
      const text = e.target.text.value;
      dispatch( addComentActionCreator(name, text) );
      dispatch( newValueNameActionCreator('') );
      dispatch( newValueTextActionCreator('') );
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
