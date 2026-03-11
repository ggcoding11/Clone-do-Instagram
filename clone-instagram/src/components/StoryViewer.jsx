import React from "react";
import Stories from "react-insta-stories";

const StoryViewer = ({ storiesList, currentStory, setEnterStoryViewer }) => {
  const story = storiesList.find((story) => story.id === currentStory);

  return (
    <div className="container-fluid d-flex justify-content-center min-100-vh bg-dark">
      <Stories
        key={story.id}
        storyStyles={{ width: "100vw" }}
        stories={story.storyInfo}
        defaultInterval={4000}
        onAllStoriesEnd={() => setEnterStoryViewer(false)}
        width={320}
        height={"100vh"}
      />
    </div>
  );
};

export default StoryViewer;
