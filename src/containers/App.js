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


let App = (props) => {
  return (
    <div className="wrapper fixed-container">

      <div className="coment-wraper">
        {
          props.coments.map(( {id, name, text, date, time} ) => {
            return (
              <Coment
                key={id}
                name={name}
                text={text}
                date={date}
                time={time}
                id={id}
                deliteComent={props.deliteComent}
              />
            )
          })
        }
      </div>

      <Form
        valueInput={props.valueInput}
        valueText={props.valueText}
        addComent={props.addComent}
        newValueName={props.newValueName}
        newValueText={props.newValueText}
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
