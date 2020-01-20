import React from "react";
import { Link } from "@reach/router";

const Header = () => {
  return (
    <Link to="/">
      <div id="header" className="reactlink">
        <h1>NC News</h1>
        <h4>Yesterdays news, today!</h4>
      </div>
    </Link>
  );
};

export default Header;
