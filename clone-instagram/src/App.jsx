import React, { useState } from "react";
import Feed from "./components/Feed";
import StoryViewer from "./components/StoryViewer";

import "./css/App.css";
import { storiesList } from "../data/StoriesList";

const App = () => {
  const [enterStoryViewer, setEnterStoryViewer] = useState(false);
  const [currentStory, setCurrentStory] = useState(0);

  return (
    <div>
      {enterStoryViewer ? (
        <StoryViewer
          storiesList={storiesList}
          currentStory={currentStory}
          setCurrentStory={setCurrentStory}
        />
      ) : (
        <Feed
          storiesList={storiesList}
          setCurrentStory={setCurrentStory}
          setEnterStoryViewer={setEnterStoryViewer}
        />
      )}
    </div>
  );
};

export default App;
