import "./reprod.css";
import Card from "../Card/casd";
import axios from "axios"
import { useEffect, useState } from "react";

const API = "https://696087c6e7aa517cb7964bb3.mockapi.io/Ink-House"

function Reprod() {
const  [pictures, SetPictures ] = useState([])
async function getPictures() {
  const res = await axios.get(API)
  SetPictures(res.data)
  
}

useEffect(() => {
  getPictures()
}, [])
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
          {pictures.map((obj) => (
            <Card picture={obj} key={obj.id}/>
          ))}
        </div>
      </section>
    </>
  );
}

export default Reprod;
