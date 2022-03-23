import { faBars, faTimeline } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
// import Button from "./Button";
import menuItems from "./MenuItems";
import "./Navbar.css";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className="navbar">
      <h1 className="navbar-logo">
        React <i className="fab fa-react"></i>
      </h1>
      <div className="menu-icon" onClick={handleClick}>
        {
            active ? <FontAwesomeIcon className="fas fa-times" icon={faTimeline} />
            : <FontAwesomeIcon className="fas fa-bars" icon={faBars} />
        }

      </div>
      <ul className={active ? "nav-menu active" : "nav-menu"}>
        {menuItems.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.url} className={item.cName}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
      <button>SIGN UP</button>
    </nav>
  );
};

export default Navbar;
