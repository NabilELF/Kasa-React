import "../styles/Card.scss";
import data from "../data/logements.json";
import { Link } from "react-router-dom";

function Card() {
  return (
    <div className="card-container">
      {data.map((e) => (
        <Link to={`/logement/${e.id}`} key={e.id}>
          <article key={e.id}>
            <img src={e.cover} alt={e.title} />
            <h2>{e.title}</h2>
          </article>
        </Link>
      ))}
    </div>
  );
}
export default Card;
