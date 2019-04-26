import React from "react";
import "./style.css";

function Cards(props) {
  return (
    <div className="card" value={props.id} onClick={() => props.onCardClicked(props.id)}
>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Cards;
