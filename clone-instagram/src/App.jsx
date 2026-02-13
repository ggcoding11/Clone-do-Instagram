import React from "react";

import logo from "/photos/logo.png";
import userIconStory from "/photos/user-icon-story.jpg";
import iconStory from "/photos/icon-story.jpg";
import userIconPost1 from "/photos/user-icon-post-1.jpg";
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

      <div className="post-container row mb-2">
        <div className="col-12">
          <div className="post-header row">
            <div className="col-6">
              <div className="post-user-info">
                <div className="post-circle with-story">
                  <div className="post-circle-whitespace">
                    <img
                      className="post-user-icon"
                      src={userIconPost1}
                      alt="icon-user-post"
                    />
                  </div>
                </div>

                <span className="post-username">amorabernesse</span>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex justify-content-end">
                <i class="bi bi-three-dots"></i>
              </div>
            </div>
          </div>
          <div className="post-image row">
            <div className="col-12">
              <img className="img-fluid" src={post1} alt="post-image" />
            </div>
          </div>
          <div className="post-action-row row">
            <div className="col-6">
              <div className="d-flex gap-2">
                <i class="bi bi-suit-heart"></i>
                <i class="bi bi-chat"></i>
                <i class="bi bi-send"></i>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-end">
              <i class="bi bi-bookmark"></i>
            </div>
          </div>
          <div className="post-description row">
            <div className="col-12">
              <div>
                <span className="fw-semibold me-1">amorabernesse</span>
                Dia de passear com essa princesa
              </div>
              <span className="past-time text-secondary">há 15 minutos</span>
            </div>
          </div>
        </div>
      </div>

      <div className="post-container row mb-2">
        <div className="col-12">
          <div className="post-header row">
            <div className="col-6">
              <div className="post-user-info">
                <div className="post-circle">
                  <img
                    className="post-user-icon"
                    src={userIconPost1}
                    alt="icon-user-post"
                  />
                </div>

                <span className="post-username">amorabernesse</span>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex justify-content-end">
                <i class="bi bi-three-dots"></i>
              </div>
            </div>
          </div>
          <div className="post-image row">
            <div className="col-12">
              <img className="img-fluid" src={post1} alt="post-image" />
            </div>
          </div>
          <div className="post-action-row row">
            <div className="col-6">
              <div className="d-flex gap-2">
                <i class="bi bi-suit-heart"></i>
                <i class="bi bi-chat"></i>
                <i class="bi bi-send"></i>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-end">
              <i class="bi bi-bookmark"></i>
            </div>
          </div>
          <div className="post-description row">
            <div className="col-12">
              <div>
                <span className="fw-semibold me-1">amorabernesse</span>
                Dia de passear com essa princesa
              </div>
              <span className="past-time text-secondary">há 15 minutos</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
