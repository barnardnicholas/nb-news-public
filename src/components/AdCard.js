import React from "react";

const AdCard = props => {
  const { ad_id, body } = props.ad;
  return (
    <li className="adcard">
      <h4>Ad {ad_id}</h4>
      <p>{body}</p>
    </li>
  );
};

export default AdCard;
