import React from "react";
import "./nav-bar.css";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light mb-5">
      <a className="navbar-brand">Navbar</a>

      <button className="btn btn-outline-danger my-2 my-sm-0" type="submit">
        <i className="fas fa-sign-out-alt"></i> Search
      </button>
      
    </nav>
  );
};
