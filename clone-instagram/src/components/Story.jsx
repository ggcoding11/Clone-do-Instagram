import React from "react";
import "./css/Story.css"

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
          <i className="bi bi-plus-lg"></i>
        </div>
      )}
    </div>
  );
};

export default Story;
