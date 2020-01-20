import React from "react";

const AdCard = ({ ad_id, body }) => {
  return (
    <li className="adcard">
      <h4>Ad {ad_id}</h4>
      <p>{body}</p>
    </li>
  );
};

export default AdCard;
