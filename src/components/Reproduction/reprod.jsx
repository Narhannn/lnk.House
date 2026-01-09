import "./reprod.css";
import Card from "../Card/card";
import axios from "axios";
import { useEffect, useState } from "react";

const API = "https://696087c6e7aa517cb7964bb3.mockapi.io/Ink-House";

function Reprod() {
  const [pictures, SetPictures] = useState([]);
  const [filtered, setFiltered] = useState([]);
  async function getPictures() {
    const res = await axios.get(API);
    SetPictures(res.data);
    setFiltered(res.data);
  }

  useEffect(() => {
    getPictures();
  }, []);

  const filterByCountry = (category) => {
    const filteredData = pictures.filter((obj) => obj.category === category);
    setFiltered(filteredData);
  };

  return (
    <>
      <section>
        <div className="container">
          <div className="reprod">
            <h1>Репродукции</h1>
            <div className="btns">
              <button onClick={() => filterByCountry("france")}>Франция</button>
              <button onClick={() => filterByCountry("germany")}>Германия</button>
              <button onClick={() => filterByCountry("england")}>Англия</button>
            </div>
          </div>
          <div className="card">
            {filtered.map((obj) => (
              <Card picture={obj} key={obj.id} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Reprod;
