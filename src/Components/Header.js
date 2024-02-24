import React from "react";
import { Link } from "react-router-dom";
import { appLogo } from "../Utils/constants";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" alt="App logo" src={appLogo} />
        <h2 style={{ marginLeft: "8px" }}>
          <span style={{ color: "white" }}>e</span>
          <span style={{ color: "lightsalmon" }}>Adukkala</span>
        </h2>
      </div>
      <div className="nav-links">
        <h4>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            Home
          </Link>
        </h4>
        <h4>
          <Link to="/about" style={{ color: "white", textDecoration: "none" }}>
            About
          </Link>
        </h4>
        <h4>
          <Link
            to="/contact"
            style={{ color: "white", textDecoration: "none" }}
          >
            Contact
          </Link>
        </h4>
        <h4>Cart</h4>
      </div>
    </div>
  );
};
export default Header;
