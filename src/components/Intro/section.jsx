import "./section.css";
import Img from "./bird.png"
function Intro() {
  return (
    <>
      <section>
        <div className="container">
            <div className="section">
          <img src={Img} alt="" />
          <div className="intro">
            <h1>
              Реплики картин <br /> от <span>Ink. House</span>
            </h1>
            <p>
              Высокое качество отрисовки на плотной бумаге или льняном <br />
              холсте. Редкие произведения, доступные цены.
            </p>
            <button>Продукция</button>
          </div>
        </div>
        </div>
      </section>
    </>
  );
}
export default Intro;
