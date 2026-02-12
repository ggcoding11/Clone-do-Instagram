import React from "react";

import logo from "/photos/logo.png";
import userIconStory from "/photos/user-icon-story.jpg";
import iconStory from "/photos/icon-story.jpg";
import post1 from "/photos/post-1.jpg";
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

      <div className="row">
        <div className="col-12">
          <div className="row">
            <div className="col-6">
              <span>amorabernesse</span>
            </div>
            <div className="col-6">
              <div className="d-flex justify-content-end">
                <i class="bi bi-three-dots"></i>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <img className="img-fluid" src={post1} alt="" />
            </div>
          </div>
          <div className="row">
            <div className="col-6"></div>
            <div className="col-6"></div>
          </div>
          <div className="row">
            <div className="col-12"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
