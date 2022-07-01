import React, { Component } from "react";
import "./styles.css";

class Portfolio extends Component {
  constructor() {
    super();
    this.state = {
      links: [
        {
          src: "https://github.com/aetente/aetente.github.io",
          name: "Portfolio Website",
          description: "The code for the portfolio website",
        },
        {
          src: "https://github.com/aetente/delivery-app",
          name: "Delivery App",
          description:
            "It is a delivery application backend written in Django. It uses google geocoding API and Holiday API. You can format address with it, manage deliveries.",
        },
        {
          src: "https://github.com/aetente/url_shortener",
          name: "URL shortener",
          description:
            "It shortens urls. For example from http://google.com to http://something/s/fghhjkd",
        },
        {
          src: "https://github.com/aetente/lunar_lander",
          name: "Lunar Lander",
          description: "Solving Lunar Lander using DQN and Double DQN.",
        },
      ],
    };
    this.mapLinks = this.mapLinks.bind(this);
  }

  mapLinks(links) {
    return links.map((l) => {
      return (
        <div className="portfolio-cell">
          <a href={l.src}>
            <div className="link-name">{l.name}</div>
            <div>{l.description}</div>
          </a>
        </div>
      );
    });
  }

  render() {
    let { links } = this.state;
    return (
      <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "30px"}}>
        <div className="portfolio-header">PORTFOLIO</div>
        <div className="portfolio-table">{this.mapLinks(links)}</div>
      </div>
    );
  }
}

export default Portfolio;
