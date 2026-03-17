import React, { useState, useEffect } from "react";
import Feed from "./components/Feed";
import StoryViewer from "./components/StoryViewer";
import Loading from "./components/Loading";

import { getAllData } from "./services/AppService";

import "./css/App.css";

const App = () => {
  const [enterStoryViewer, setEnterStoryViewer] = useState(false);
  const [currentStory, setCurrentStory] = useState(0);

  const [posts, setPosts] = useState(null);
  const [stories, setStories] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllData()
      .then((response) => {
        setPosts(response[0].data);
        setStories(response[1].data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="min-vh-100">
      {loading ? (
        <Loading />
      ) : enterStoryViewer ? (
        <StoryViewer
          stories={stories}
          currentStory={currentStory}
          setEnterStoryViewer={setEnterStoryViewer}
        />
      ) : (
        <Feed
          posts={posts}
          stories={stories}
          setCurrentStory={setCurrentStory}
          setEnterStoryViewer={setEnterStoryViewer}
        />
      )}
    </div>
  );
};

export default App;
