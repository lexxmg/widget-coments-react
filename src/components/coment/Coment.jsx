import './coment.css';

const Coment = (props) => {
  return (
    <div className="coment">
      <p className="coment__text">{props.text}</p>

      <div className="coment__name-inner">
        <span className="coment__name">{props.name}</span>

        <time className="coment__time-inner">
          <span className="coment__time">{props.time}</span>

          <span className="coment__date">{props.date}</span>
        </time>

        <button className="coment__btn" onClick={props.delete}>удалить</button>
      </div>
    </div>
  );
}

export default Coment;
