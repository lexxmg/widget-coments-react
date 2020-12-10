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
    const state = this.state;
    const id = (+new Date()).toString(16);

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
    state.coments.push(newComent);
    
    this.setState(state);

    state.form.valueInput = '';
    state.form.valueText = '';

    localStorage.setItem( 'state', JSON.stringify(this.state) );
    //debugger;
  }

  deleteComent(id) {
    const state = this.state;

    const newArr = state.coments.filter((coment) => {
      return coment.id !== id;
    });
    state.coments = newArr;

    this.setState(state);

    localStorage.setItem('state', JSON.stringify(this.state));
  }

  newValueName(e) {
    const state = this.state;
    state.form.valueInput = e.target.value;

    this.setState(state);
  }

  newValueText(e) {
    const state = this.state;
    state.form.valueText = e.target.value;

    this.setState(state);
  }

  render() {
    return (
      <div className="wrapper fixed-container">
        {
          this.state.coments.map((coment) => {
            return (
              <Coment
                key={coment.id}
                name={coment.name}
                text={coment.text}
                date={coment.date}
                time={coment.time}
                delete={this.deleteComent.bind(this, coment.id)}
              />
            )
          })
        }

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
