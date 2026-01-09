

function Card({picture}) {
  return (
    <>
      <div className="cards">
        <img src={picture.img} alt="" />
        <h3>{picture.author}</h3>
        <h2>{picture.title}</h2>
        <h4>{picture.description}</h4>
        <h5>{picture.prise} руб</h5>
        <button>В корзину</button>
      </div>
    </>
  );
}

export default Card
