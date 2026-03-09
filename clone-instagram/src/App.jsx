import React, { useState } from "react";
import Feed from "./components/Feed";
import StoryViewer from "./components/StoryViewer";

import "./css/App.css";

const App = () => {
  const [enterStoryViewer, setEnterStoryViewer] = useState(false);

  return (
    <div>
      {enterStoryViewer ? (
        <StoryViewer />
      ) : (
        <Feed setEnterStoryViewer={setEnterStoryViewer} />
      )}
    </div>
  );
};

export default App;
