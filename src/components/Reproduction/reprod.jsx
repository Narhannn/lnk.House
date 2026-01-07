import "./reprod.css";
import Img from "./foto.jpg";

function Reprod() {
  return (
    <>
      <section>
        <div className="container">
          <div className="reprod">
            <h1>Репродукции</h1>
            <div className="btns">
              <button>Франция</button>
              <button>Германия</button>
              <button>Англия</button>
            </div>
          </div>
          <div className="cards">
            <img src={Img} alt="" />
            <h3>Марсель Руссо</h3>
            <h2>Охота Амура</h2>
            <h4>Холст, масло (50х80) </h4>
            <h5>14 500 руб</h5>
            <button>В корзину</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Reprod;
