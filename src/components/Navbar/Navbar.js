import { faBars, faTimeline } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import menuItems from "./MenuItems";
import "./Navbar.css";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
          <img src={require('../../assets/icons8-lawyer-60.png')} alt="" className="nav_logo mx-2" />
            <span className="log_header">
            LAWER APPOINT 
            </span>
        
      </div>
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
                 <Link to={item.url} className={item.cName} >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
