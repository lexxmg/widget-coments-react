import './coment.css';

const Coment = (props) => {
  return (
    <div className="coment">
      <p className="coment__text">какойто комент</p>

      <div className="coment__name-inner">
        <span className="coment__name">вася</span>

        <time className="coment__time-inner">
          <span className="coment__time">12:00</span>

          <span className="coment__date">12-07</span>
        </time>
      </div>

      <button className="coment__btn">удалить</button>
    </div>
  );
}

export default Coment;
