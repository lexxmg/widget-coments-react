import './form.css';

const Form = (props) => {
  return (
    <div className="form-wrapper">
      <form className="form-wrapper__form">
        <div className="form-wrapper__input-wrapper">
          <input id="userName" type="text" className="form-wrapper__input"/>
          <label htmlFor="userName" className="form-wrapper__label">Новый коментарий</label>
        </div>

        <textarea className="form-wrapper_text" cols="30" rows="10"></textarea>

        <button className="form-wrapper__btn">Написать</button>
      </form>
    </div>
  );
}

export default Form;
