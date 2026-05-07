import { Link } from "react-router-dom"

function Card({ title, dec, offer, imge, link }) {
  return (
    <Link to = {link}>
      <div className='card'>
        <div className="card-text">
          <h1>{title}</h1>
          <h3>{dec}</h3>
          <span className="offer">{offer}</span>
        </div>
        <img src={imge} alt='cardimage' className='food-img' />
        <div className='arrow'>→</div>
      </div>
    </Link>
  );
}



export default Card;