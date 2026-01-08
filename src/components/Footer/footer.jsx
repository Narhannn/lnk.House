import "./footer.css";
import Img from "./logo.svg";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer">
            <div>
              <img src={Img} alt="" /> <br />
              <a href="">+7 (999) 543-54-54</a>
              <h6>Мастерская</h6>
            </div>
            <div>
              <h3>Репродукции</h3>
              <h6>Франция</h6>
              <h6>Германия</h6>
              <h6>Англия</h6>
            </div>
            <div>
              <h3>Новинки</h3>
              <h6>2021</h6>
              <h6>2020</h6>
            </div>
            <div>
              <h3>О нас</h3>
              <h6>Художники</h6>
              <h6>Менеджеры</h6>
            </div>
            <div>
                <FaFacebook/>
                <FaInstagram/>
                <FaYoutube/>
                <div>
                    <p>Ink. House ®</p>
                    <p>All rights reserved</p>
                </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
