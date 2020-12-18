import React from 'react';
import './App.css';
import Coment from '../components/coment/Coment';
import Form from '../components/form/Form';
import { connect } from 'react-redux';
// import {
//   addComentActionCreator,
//   newValueNameActionCreator,
//   newValueTextActionCreator
// } from '../../redux/form-reducer';


let App = (props) => {
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

const mapStateToProps = (state) => {
  return {state: state}
}

const mapDispatchToProps = (dispatch) => {
  return {dispatch: dispatch}
}

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
