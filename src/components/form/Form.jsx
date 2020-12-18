import './form.css';


const Form = ({ addComent, newValueName, valueInput, newValueText, valueText}) => {
  return (
    <div className="form-wrapper">
      <form className="form-wrapper__form" onSubmit={addComent}>
        <div className="form-wrapper__input-wrapper">
          <input
            id="userName" type="text"
            className="form-wrapper__input"
            onChange={newValueName}
            value={valueInput}
            required/>
          <label htmlFor="userName" className="form-wrapper__label">Укажите имя</label>

          <div className="form-wrapper__line"></div>
        </div>

        <textarea
          className="form-wrapper_text"
          cols="30" rows="10"
          onChange={newValueText}
          value={valueText}>
        </textarea>

        <button className="form-wrapper__btn">Написать</button>
      </form>
    </div>
  );
}

export default Form;
