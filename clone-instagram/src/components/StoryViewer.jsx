import React from "react";
import Stories from "react-insta-stories";

const StoryViewer = ({ storiesList, currentStory, setCurrentStory }) => {
  return (
    <div className="container-fluid d-flex justify-content-center min-100-vh bg-dark">
      {storiesList.map(
        (story) =>
          story.id == currentStory && (
            <Stories
              key={story.id}
              storyStyles={{ width: "100vw" }}
              stories={story.storyInfo}
              defaultInterval={4000}
              onAllStoriesEnd={() => {
                if (currentStory == storiesList.length - 1) {
                  setCurrentStory(0);
                } else {
                  setCurrentStory((currentId) => currentId + 1);
                }
              }}
              width={320}
              height={"100vh"}
            />
          ),
      )}
    </div>
  );
};

export default StoryViewer;
