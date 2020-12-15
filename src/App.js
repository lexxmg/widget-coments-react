import React from 'react';
import './App.css';
import Coment from './components/coment/Coment';
import Form from './components/form/Form';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.local = JSON.parse(localStorage.getItem('state') );

    if (this.local) {
      this.state = this.local;
    } else {
      this.state = {
        coments: [],
        form: {
          valueInput: '',
          valueText: ''
        }
      }
    }

    this.addComent = this.addComent.bind(this);
    this.newValueName = this.newValueName.bind(this);
    this.newValueText = this.newValueText.bind(this);
    //this.deleteComent = this.deleteComent.bind(this);
    //console.log( this.localStorage );
    //debugger;
  }

  addComent(e) {
    e.preventDefault();

    const id = (+new Date()).toString(16);

    const date = new Date();
    const time = date.getHours() + ':' + date.getMinutes();
    const toDay = date.getDate() + '-' + (date.getMonth() + 1);

    this.setState(state => {
      const newComent = {
        name: state.form.valueInput,
        text: state.form.valueText,
        date: toDay,
        time: time,
        id: id
      };
      const coments = state.coments.concat(newComent);

      return {
        coments: coments,
        form: {
          valueInput: '',
          valueText: ''
        }
      };
    }, () => {
      localStorage.setItem('state', JSON.stringify(this.state));
    });
  }

  deleteComent(id) {
    this.setState(state => {
      const newArr = state.coments.filter((coment) => {
        return coment.id !== id;
      });

      return {coments: newArr};
    }, () => {
      localStorage.setItem('state', JSON.stringify(this.state));
      if (this.state.coments.length === 0) {
        localStorage.clear();
      }
    });
  }

  newValueName(e) {
    this.setState(state => {
      state.form.valueInput = e.target.value;
      return { state }
    });
  }

  newValueText(e) {
    this.setState(state => {
      state.form.valueText = e.target.value;
      return { state }
    });
  }

  render() {
    return (
      <div className="wrapper fixed-container">

        <div className="coment-wraper">
          {
            this.state.coments.map(( {id, name, text, date, time} ) => {
              return (
                <Coment
                  key={id}
                  name={name}
                  text={text}
                  date={date}
                  time={time}
                  del={this.deleteComent.bind(this, id)}
                />
              )
            })
          }
        </div>

        <Form
          newValueName={this.newValueName}
          valueInput={this.state.form.valueInput}
          newValueText={this.newValueText}
          valueText={this.state.form.valueText}
          addComent={this.addComent}
        />
      </div>
    );
  }
}

export default App;
