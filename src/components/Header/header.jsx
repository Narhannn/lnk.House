import Img from "./logo.svg"
import {FiShoppingCart} from "react-icons/fi"
import "./header.css"
function Header() {
    return (
        <>
        <header>
            <div className="container">
                <div className="header">
                <div>
                    <img src={Img} alt="" />
                </div>
                <nav>
                    <a href="">Репродукции</a>
                    <a href="">Новинки</a>
                    <a href="">О нас</a>
                    <div className="icon">
                        <FiShoppingCart/>
                    </div>
                </nav>
            </div>
            </div>
        </header>
        </>
    )
}

export default Header