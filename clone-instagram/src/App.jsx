import React from "react";
import logo from "/photos/logo.png";
import Description from "./components/Description";
import FooterSidebar from "./components/FooterSidebar";
import StoryRow from "./components/StoryRow";
import Post from "./components/Post";

import "./App.css";

const App = () => {
  return (
    <div className="main container-fluid">
      <div className="row">
        <div className="col-12 col-md-1 col-xl-2 border">
          <FooterSidebar />
        </div>
        <div className="col-12 col-md-11 col-xl-10">
          <header className="d-block d-md-none">
            <nav className="navbar">
              <div className="container-fluid">
                <a className="navbar-brand" href="https://www.instagram.com/">
                  <img src={logo} alt="Logo Instagram" />
                  <i className="bi bi-chevron-down"></i>
                </a>
                <div className="navbar-icons">
                  <i className="bi bi-plus-lg"></i>
                  <i className="bi bi-suit-heart"></i>
                </div>
              </div>
            </nav>
          </header>

          <section className="mt-2">
            <StoryRow />
          </section>

          <section className="post-section">
            <Post />
            <Post />
          </section>
        </div>
      </div>
    </div>
  );
};

export default App;
