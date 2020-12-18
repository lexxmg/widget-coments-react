import './coment.css';

const Coment = ({ deliteComent, text, name, time, date, id }) => {
  return (
    <div className="coment">
      <p className="coment__text">{text}</p>

      <div className="coment__name-inner">
        <span className="coment__name">{name}</span>

        <time className="coment__time-inner">
          <span className="coment__time">{time}</span>

          <span className="coment__date">{date}</span>
        </time>

        <button className="coment__btn" onClick={() => deliteComent(id)}>удалить</button>
      </div>
    </div>
  );
}

export default Coment;
