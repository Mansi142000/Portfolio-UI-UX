import React from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import { greeting, workExperiences, bigProjects } from "../../portfolio";

function Header() {
  const viewExperience = workExperiences.display;
  const viewProjects = bigProjects.display;

  return (
    <Headroom>
      <header className="header">
        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          {viewProjects && (
            <li>
              <a href="#projects">Projects</a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience">Work Experiences</a>
            </li>
          )}

          <li>
            <a href="#contact">Contact Me</a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}

export default Header;
