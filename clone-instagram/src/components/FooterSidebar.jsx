import React from "react";
import logo from "/photos/logo.png";
import userIcon from "/photos/user-icon-story.jpg";


const FooterSidebar = () => {
  return (
    <div className="footer-sidebar">
      <nav>
        <div className="d-none d-md-block w-100 mb-5">
          <i className="d-inline d-xl-none bi bi-instagram"></i>
          <img
            src={logo}
            alt="Logo Instagram"
            className="d-none d-xl-inline sidebar-logo-instagram"
          />
        </div>

        <div className="d-flex flex-md-column justify-content-evenly align-items-center align-items-md-start gap-4 w-100">
          <div className="d-flex align-items-center gap-3">
            <i className="bi bi-house-door"></i>
            <span className="d-none d-xl-inline fs-5">Home</span>
          </div>
          <div className="d-flex align-items-center gap-3">
            <i className="bi bi-search"></i>
            <span className="d-none d-xl-inline fs-5">Explore</span>
          </div>

          <div className="d-flex align-items-center gap-3">
            <i className="bi bi-play-btn"></i>
            <span className="d-none d-xl-inline fs-5">Reels</span>
          </div>

          <div className="d-flex align-items-center gap-3">
            <i className="bi bi-send"></i>
            <span className="d-none d-xl-inline fs-5">Messages</span>
          </div>

          <div className="d-none d-md-block d-xl-flex align-items-xl-center gap-3">
            <i className="bi bi-suit-heart"></i>
            <span className="d-none d-xl-inline fs-5">Notifications</span>
          </div>

          <div className="d-flex align-items-center gap-3">
            <div className="footer-sidebar-user-circle">
              <img
                src={userIcon}
                className="footer-sidebar-user-icon"
                alt="Foto do Usuário"
              />
            </div>

            <span className="d-none d-xl-inline fs-5">Profile</span>
          </div>

          <div className="d-none d-md-block d-xl-flex align-items-xl-center gap-3">
            <i className="bi bi-list"></i>
            <span className="d-none d-xl-inline fs-5">Menu</span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default FooterSidebar;
