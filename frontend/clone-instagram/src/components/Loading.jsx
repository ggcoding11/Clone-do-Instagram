import React from "react";

import InstagramLoading from "/photos/instagram-loading.png";

import "../css/Loading.css"

const Loading = () => {
  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center">
      <img src={InstagramLoading} alt="Logo Instagram" className="logo"/>
    </div>
  );
};

export default Loading;
