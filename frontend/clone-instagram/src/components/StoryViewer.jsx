import React from "react";
import Stories from "react-insta-stories";

const StoryViewer = ({ stories, currentStory, setEnterStoryViewer }) => {
  const story = stories.find((story) => story.id === currentStory);

  const storiesInfo = story["storiesInfo"].map((storyInfo) => {
    return {
      url: storyInfo.urlStoryContent,
      header: {
        heading: story.username,
        subheading: storyInfo.subheading,
        profileImage: "/photos/" + story.photo,
      },
    };
  });

  return (
    <div className="container-fluid d-flex justify-content-center min-100-vh bg-dark">
      <Stories
        key={story.id}
        storyStyles={{ width: "100vw" }}
        stories={storiesInfo}
        defaultInterval={4000}
        onAllStoriesEnd={() => setEnterStoryViewer(false)}
        width={320}
        height={"100vh"}
      />
    </div>
  );
};

export default StoryViewer;
