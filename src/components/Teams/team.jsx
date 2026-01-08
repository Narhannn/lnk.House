import "./team.css";
import Img from "./cart.png";
import Img2 from "./1.png"
import Img3 from "./2.jpg"
import Img4 from "./3.jpg"

function Team() {
  return (
    <>
      <section>
        <div className="container">
          <div className="team">
            <img src={Img} alt="" />
            <div>
              <h1>Наша команда</h1>
              <p>
                Значимость этих проблем настолько очевидна, что базовый вектор <br />
                развития позволяет оценить значение экспериментов, поражающих <br />
                по своей масштабности и грандиозности. Мы вынуждены
                отталкиваться <br /> от того, что консультация с широким активом.
              </p>
              <div className="images">
                <img src={Img2} alt="" />
                <img src={Img3} alt="" />
                <img src={Img4} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Team;
