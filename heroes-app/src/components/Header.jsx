import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <nav className="nav-bar">
        <Link to="/">Asociaciones </Link>
        <div className="nav-right">
          <ul>
            <li>
              <Link to="/">Marvel</Link>
            </li>
            <li>
              <Link to="/dc">Dc</Link>
            </li>
            <li>
              <Link to="/login">Logout</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
