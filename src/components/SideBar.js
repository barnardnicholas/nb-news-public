import React, { Component } from "react";
import AdCard from "./AdCard";
import * as dummyData from "../utils/dummy-data";

class SideBar extends Component {
  state = {
    ads: []
  };

  componentDidMount() {
    this.setState({ ads: dummyData.ads });
  }

  render() {
    const { ads } = this.state;
    return (
      <div id="sidebar">
        <ul>
          {ads.map(ad => {
            return <AdCard key={ad.ad_id} ad={ad} />;
          })}
        </ul>
      </div>
    );
  }
}

export default SideBar;
