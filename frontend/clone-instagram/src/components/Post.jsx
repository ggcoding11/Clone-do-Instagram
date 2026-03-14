import React from "react";

import Description from "./Description";

import {
  BsThreeDots,
  BsSuitHeart,
  BsChat,
  BsSend,
  BsBookmark,
} from "react-icons/bs";

import "../css/Post.css";

const Post = ({
  userIcon,
  username,
  postImage,
  descriptionText,
  withStory = false,
}) => {
  return (
    <div className="post-container">
      <div className="post-header">
        <div className="row">
          <div className="col-6">
            <div className="post-user-info">
              <div
                className={withStory ? "post-circle with-story" : "post-circle"}
              >
                {withStory ? (
                  <div className="post-circle-whitespace">
                    <img
                      className="post-user-icon"
                      src={userIcon}
                      alt="Foto do Usuário"
                    />
                  </div>
                ) : (
                  <img
                    className="post-user-icon"
                    src={userIcon}
                    alt="Foto do Usuário"
                  />
                )}
              </div>

              <span className="post-username">{username}</span>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex justify-content-end align-items-center w-100 h-100 gap-2">
              <span className="post-user-follow">Follow</span>
              <BsThreeDots />
            </div>
          </div>
        </div>
      </div>

      <div className="post-image">
        <div className="row">
          <div className="col-12">
            <img className="img-fluid" src={postImage} alt="Imagem do Post" />
          </div>
        </div>
      </div>
      <div className="post-action-row">
        <div className="row p-1">
          <div className="col-6">
            <div className="d-flex align-items-center gap-3">
              <BsSuitHeart className="fs-3" />
              <BsChat className="fs-3" />
              <BsSend className="fs-3" />
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex justify-content-end">
              <BsBookmark className="fs-3" />
            </div>
          </div>
        </div>
      </div>
      <div className="post-description">
        <div className="row">
          <div className="col-12">
            <Description texto={descriptionText} />

            <div className="text-secondary">há 15 minutos</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
