import React from 'react';
import './App.css';
import Coment from '../components/coment/Coment';
import Form from '../components/form/Form';
import { connect } from 'react-redux';
import {
  addComentActionCreator,
  deleteComentActionCreator
} from '../redux/actions';


let App = ({
            addComent,
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
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    coments: state.coments
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addComent: (name, text) => {
      dispatch( addComentActionCreator(name, text) );
    },
    deliteComent: (id) => {
      dispatch( deleteComentActionCreator(id) );
    }
  }
}

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
