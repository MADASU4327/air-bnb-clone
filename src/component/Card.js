import React from "react";

function Card(props) {
  let badgetext;
  if (props.item.openSpots === 0) {
    badgetext = "Sold Out";
  } else if (props.item.openSpots === "Online") {
    badgetext = "Online";
  }
  return (
    <div className="card">
      {badgetext && <div className="card-badge">{badgetext}</div>}{" "}
      <img
        className="card-image"
        src={`./images/${props.item.coverImg}`}
        alt=""
      />
      <div className="cards-stats">
        <img className="card-star" alt="" src="../images/star.png" />
        <span>{props.item.stats.rating}</span>
        <span className="gray">({props.item.stats.reviewCount})</span>
        <span className="gray"> {props.item.location}</span>
      </div>
      <p>{props.item.title}</p>
      <p>
        <span className="bold">From ${props.item.price}</span> ` / person
      </p>
    </div>
  );
}

export default Card;
