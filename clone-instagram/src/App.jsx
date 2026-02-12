import React from "react";

import logo from "/photos/logo.png";
import userIconStory from "/photos/user-icon-story.jpg";
import iconStory from "/photos/icon-story.jpg";
import "./App.css";

const App = () => {
  return (
    <div className="container-fluid">
      <nav className="navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="https://www.instagram.com/">
            <img src={logo} alt="Logo" />
          </a>
          <div className="navbar-icons">
            <i className="bi bi-plus-lg"></i>
            <i className="bi bi-suit-heart"></i>
          </div>
        </div>
      </nav>

      <div className="story-row">
        <div className="story-container">
          <div className="story-circle">
            <img className="story-icon" src={userIconStory} alt="icon-story" />
          </div>

          <span className="story-username">Seu story</span>

          <div className="story-add-icon">
            <i className="bi bi-plus-lg"></i>
          </div>
        </div>

        <div className="story-container">
          <div className="story-circle other-user">
            <div className="story-circle-whitespace">
              <img className="story-icon" src={iconStory} alt="icon-story" />
            </div>
          </div>

          <span className="story-username other-user">harumi_2</span>
        </div>

        <div className="story-container">
          <div className="story-circle other-user">
            <div className="story-circle-whitespace">
              <img className="story-icon" src={iconStory} alt="icon-story" />
            </div>
          </div>

          <span className="story-username other-user">harumi_2</span>
        </div>
        <div className="story-container">
          <div className="story-circle other-user">
            <div className="story-circle-whitespace">
              <img className="story-icon" src={iconStory} alt="icon-story" />
            </div>
          </div>

          <span className="story-username other-user">harumi_2</span>
        </div>
        <div className="story-container">
          <div className="story-circle other-user">
            <div className="story-circle-whitespace">
              <img className="story-icon" src={iconStory} alt="icon-story" />
            </div>
          </div>

          <span className="story-username other-user">harumi_2</span>
        </div>
        <div className="story-container">
          <div className="story-circle other-user">
            <div className="story-circle-whitespace">
              <img className="story-icon" src={iconStory} alt="icon-story" />
            </div>
          </div>

          <span className="story-username other-user">harumi_2</span>
        </div>
        <div className="story-container">
          <div className="story-circle other-user">
            <div className="story-circle-whitespace">
              <img className="story-icon" src={iconStory} alt="icon-story" />
            </div>
          </div>

          <span className="story-username other-user">harumi_2</span>
        </div>
      </div>
    </div>
  );
};

export default App;
