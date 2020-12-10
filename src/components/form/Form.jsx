import './form.css';

const Form = (props) => {
  return (
    <div className="form-wrapper">
      <form className="form-wrapper__form" onSubmit={props.addComent}>
        <div className="form-wrapper__input-wrapper">
          <input
            id="userName" type="text"
            className="form-wrapper__input"
            onChange={props.newValueName}
            value={props.valueInput}
            required/>
          <label htmlFor="userName" className="form-wrapper__label">Укажите имя</label>
        </div>

        <textarea
          className="form-wrapper_text"
          cols="30" rows="10"
          onChange={props.newValueText}
          value={props.valueText}>
        </textarea>

        <button className="form-wrapper__btn">Написать</button>
      </form>
    </div>
  );
}

export default Form;
