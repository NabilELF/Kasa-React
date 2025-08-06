import "../styles/Logement.scss";
import data from "../data/logements.json";
import { useParams, Navigate } from "react-router-dom";
import arrowLeft from "../images/arrowLeft.png";
import arrowRight from "../images/arrowRight.png";
import { useState } from "react";
//Pour les étoiles de rating
import { FaStar } from "react-icons/fa";
import Collapse from "../components/Collapse";

function Logement() {
  //on récupère l'ID de l'URL
  const { id } = useParams();

  //On cherche le bon logement
  const e = data.find((item) => item.id === id);

  if (!e) {
    return <Navigate to="/404" />;
  }

  const [index, setIndex] = useState(0);

  const arrowDown = (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 7L10 12L15 7"
        stroke="white"
        stroke-width="2"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );

  const Left = () => {
    if (index === 0) {
      setIndex(e.pictures.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const Right = () => {
    if (index === e.pictures.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const Rating = () => {
    const t = parseInt(e.rating);
    const stars = [];

    for (let i = 0; i < 5; i++) {
      stars.push(<FaStar key={i} color={i < t ? "red" : "#e3e3e3"} />);
    }

    return stars;
  };

  return (
    <div className="logement-container">
      <div key={e.id}>
        <div className="logement-slider">
          <img src={e.pictures[index]} alt={e.title} />
          {e.pictures.length > 1 && (
            <div className="slider-count">
              {index + 1}/{e.pictures.length}
            </div>
          )}
          {e.pictures.length > 1 && (
            <>
              <button className="arrowLeft" onClick={Left}>
                <img src={arrowLeft} alt="flèche gauche" />
              </button>
              <button className="arrowRight" onClick={Right}>
                <img src={arrowRight} alt="flèche droite" />
              </button>
            </>
          )}
        </div>

        <div className="informations-container">
          {/* Bloc global header (titre + tags + hôte + étoiles) */}
          <div className="logement-header">
            <div className="left">
              <h1>{e.title}</h1>
              <h2>{e.location}</h2>
              <div className="tags-container">
                {e.tags.map((tag, index) => (
                  <p key={index}>{tag}</p>
                ))}
              </div>
            </div>

            <div className="right">
              <div className="host-info">
                <h2>
                  {e.host.name.split(" ")[0]}
                  <br />
                  {e.host.name.split(" ")[1]}
                </h2>
                <img src={e.host.picture} alt={`Photo de ${e.host.name}`} />
              </div>
              <div className="stars">{Rating()}</div>
            </div>
          </div>

          {/* Collapse Description + Équipements */}
          <div className="collapse-block">
            <Collapse title="Description">
              <p>{e.description}</p>
            </Collapse>

            <Collapse title="Équipements">
              <ul>
                {e.equipments.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </Collapse>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logement;
