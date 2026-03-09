import React from "react";

import { BsPlusLg } from "react-icons/bs";

import "../css/Story.css";

const Story = ({
  photo,
  username = "Seu story",
  myUser = false,
  setEnterStoryViewer,
}) => {
  return (
    <div className="story-container">
      <div
        role={"button"}
        onClick={() => {
          if (myUser === false) {
            setEnterStoryViewer(true);
          }
        }}
        className={myUser ? "story-circle my-user" : "story-circle"}
      >
        {myUser ? (
          <img className="story-icon" src={photo} alt="Foto do Story" />
        ) : (
          <div className="story-circle-whitespace">
            <img className="story-icon" src={photo} alt="Foto do Story" />
          </div>
        )}
      </div>

      <span className="story-username">{username}</span>

      {myUser && (
        <div className="story-add-icon">
          <BsPlusLg />
        </div>
      )}
    </div>
  );
};

export default Story;
