// rfce

function Card(props) {
  return (
    <div style={{display:"flex" , border:"2px solid black"}}>
      <img src={props.image} alt={props.title} width="200" />

      <h2>Title: {props.title}</h2>
      <h2>Price: ₹{props.price}</h2>
    </div>
  );
}

export default Card;
