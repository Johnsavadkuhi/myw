import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark ">
      <div className="container">
        <a tabIndex="0" href="/" className="navbar-brand">
          Wallet Logo
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenue">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navmenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a tabIndex="1" href="/wallet" className="nav-link">
                Wallet
              </a>
            </li>
            <li className="nav-item">
              <a tabIndex="2" href="/swap" className="nav-link">
                Swap
              </a>
            </li>
            <li className="nav-item">
              <a tabIndex="3" href="/about" className="nav-link">
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
