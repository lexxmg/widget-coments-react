import './App.css';
import Coment from './components/coment/Coment';
import Form from './components/form/Form';

function App(props) {
  return (
    <div className="wrapper fixed-container">
      <Coment />

      <Form />
    </div>
  );
}

export default App;
