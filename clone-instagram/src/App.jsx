import React from "react";

import logo from "/photos/logo.png";

const App = () => {
  return (
    <div className="container-fluid">
      <nav className="navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="https://www.instagram.com/">
            <img src={logo} width={100} height={44} alt="Logo" />
          </a>
          <div className="d-flex align-items-center gap-2">
            <i className="bi bi-plus-lg fs-2"></i>
            <i className="bi bi-suit-heart fs-4"></i>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default App;
