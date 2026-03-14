import React from "react";

import InstagramLogo from "/photos/instagram-logo.png";
import MyUserIcon from "/photos/my-user-icon.jpg";
import Story from "./Story";
import Post from "./Post";

import { postsList } from "../../data/PostsList";

import {
  BsInstagram,
  BsChevronDown,
  BsHouseDoor,
  BsSearch,
  BsPlayBtn,
  BsSend,
  BsSuitHeart,
  BsList,
  BsPlusLg,
} from "react-icons/bs";

import "../css/Feed.css";

const Feed = ({ setEnterStoryViewer, setCurrentStory, storiesList }) => {
  return (
    <div className="main container-fluid">
      <div className="row">
        <div className="col-12 col-md-1 col-xl-2 border">
          <div className="dashboard">
            <nav>
              <div className="d-none d-md-flex flex-md-column align-items-md-center align-items-xl-start w-100 mb-5">
                <BsInstagram className="d-inline d-xl-none" />
                <img
                  src={InstagramLogo}
                  alt="Logo Instagram"
                  className="d-none d-xl-inline dashboard-logo"
                />
              </div>

              <div className="d-flex flex-md-column justify-content-evenly align-items-center align-items-xl-start gap-4 w-100 p-1">
                <div className="d-flex align-items-center gap-3">
                  <BsHouseDoor />
                  <span className="d-none d-xl-inline fs-6">
                    Página Inicial
                  </span>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <BsSearch />
                  <span className="d-none d-xl-inline fs-6">Explorar</span>
                </div>

                <div className="d-flex align-items-center gap-3">
                  <BsPlayBtn />
                  <span className="fw-normal d-none d-xl-inline fs-6">
                    Reels
                  </span>
                </div>

                <div className="d-flex align-items-center gap-3">
                  <BsSend />
                  <span className="d-none d-xl-inline fs-6">Mensagens</span>
                </div>

                <div className="d-none d-md-flex align-items-xl-center gap-3">
                  <BsSuitHeart />
                  <span className="d-none d-xl-inline fs-6">Notificações</span>
                </div>

                <div className="d-flex align-items-center gap-3">
                  <div className="dashboard-user-circle">
                    <img
                      src={MyUserIcon}
                      className="dashboard-user-icon"
                      alt="Foto do Usuário"
                    />
                  </div>

                  <span className="d-none d-xl-inline fs-6">Perfil</span>
                </div>

                <div className="d-none d-md-flex align-items-xl-center gap-3">
                  <BsList />
                  <span className="d-none d-xl-inline fs-6">Menu</span>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div className="col-12 col-md-11 col-xl-10">
          <header className="navbar-header d-block d-md-none">
            <nav className="navbar">
              <div className="container-fluid">
                <a className="navbar-brand" href="https://www.instagram.com/">
                  <img src={InstagramLogo} alt="Logo Instagram" />
                  <BsChevronDown className="fs-6" />
                </a>
                <div className="navbar-icons">
                  <BsPlusLg className="fs-2" />
                  <BsSuitHeart className="fs-3" />
                </div>
              </div>
            </nav>
          </header>

          <section className="story-section">
            <div className="story-row">
              <Story photo={MyUserIcon} myUser={true} />
              {storiesList.map((story) => (
                <Story
                  key={story.id}
                  photo={story.photo}
                  username={story.username}
                  onClickStory={() => {
                    setCurrentStory(story.id);
                    setEnterStoryViewer(true);
                  }}
                />
              ))}
            </div>
          </section>

          <section className="post-section">
            {postsList.map((post) => (
              <Post
                key={post.id}
                userIcon={post.userIcon}
                username={post.username}
                postImage={post.postImage}
                descriptionText={post.descriptionText}
                withStory={post.withStory}
              />
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Feed;
