import React from "react";

import { BsPlusLg } from "react-icons/bs";

import "../css/Story.css";

const Story = ({ photo, username = "Seu story", otherUser = false }) => {
  return (
    <div className="story-container">
      <div className={otherUser ? "story-circle other-user" : "story-circle"}>
        {otherUser ? (
          <div className="story-circle-whitespace">
            <img className="story-icon" src={photo} alt="Foto do Story" />
          </div>
        ) : (
          <img className="story-icon" src={photo} alt="Foto do Story" />
        )}
      </div>

      <span className="story-username">{username}</span>

      {!otherUser && (
        <div className="story-add-icon">
          <BsPlusLg />
        </div>
      )}
    </div>
  );
};

export default Story;
