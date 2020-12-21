import './form.css';
import React, { useState } from 'react';

const Form = ({ addComent }) => {
  const [valueInput, setValueName] = useState('');
  const [valueText, setValuetext] = useState('Написать коментарий');
  const submit = (e) => {
    e.preventDefault();
    addComent(valueInput, valueText);
    setValueName('');
    setValuetext('Новый коментарий');
  };

  return (
    <div className="form-wrapper">
      <form className="form-wrapper__form" onSubmit={submit}>
        <div className="form-wrapper__input-wrapper">
          <input
            id="userName" type="text"
            name="userName"
            className="form-wrapper__input"
            onChange={ (event) => setValueName(event.target.value) }
            value={valueInput}
            required/>
          <label htmlFor="userName" className="form-wrapper__label">Укажите имя</label>

          <div className="form-wrapper__line"></div>
        </div>

        <textarea
          className="form-wrapper_text"
          name="text"
          onChange={event => setValuetext(event.target.value)}
          onFocus={() => setValuetext('')}
          value={valueText}>
        </textarea>

        <button className="form-wrapper__btn">Написать</button>
      </form>
    </div>
  );
}

export default Form;
