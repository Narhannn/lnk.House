

function Card({picture}) {
  return (
    <>
      <div className="card">
        <div className="cards">
        <img src={picture.img} alt="" />
        <h3>{picture.author}</h3>
        <h2>Охота Амура</h2>
        <h4>Холст, масло (50х80) </h4>
        <h5>14 500 руб</h5>
        <button>В корзину</button>
      </div>
      </div>
    </>
  );
}

export default Card
