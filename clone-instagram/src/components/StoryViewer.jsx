import React, { useState } from "react";
import Stories from "react-insta-stories";
import UserIcon1 from "/photos/user-icon-1.jpg";
import UserIcon2 from "/photos/user-icon-2.jpg";
import UserIcon3 from "/photos/user-icon-3.jpg";
import UserIcon4 from "/photos/user-icon-4.jpg";
import UserIcon5 from "/photos/user-icon-5.jpg";
import UserIcon6 from "/photos/user-icon-6.jpg";
import UserIcon7 from "/photos/user-icon-7.jpg";
import UserIcon8 from "/photos/user-icon-8.jpg";
import UserIcon9 from "/photos/user-icon-9.jpg";
import UserIcon10 from "/photos/user-icon-10.jpg";
import UserIcon11 from "/photos/user-icon-11.jpg";
import UserIcon12 from "/photos/user-icon-12.jpg";

const StoryViewer = () => {
  const [actualStory, setActualStory] = useState(0);

  const stories = [
    {
      id: 0,
      storyInfo: [
        {
          url: "https://images.pexels.com/photos/15858595/pexels-photo-15858595.jpeg",
          header: {
            heading: "harumi_2",
            subheading: "há 15 minutos",
            profileImage: UserIcon1,
          },
        },
        {
          url: "https://images.pexels.com/photos/36379628/pexels-photo-36379628.jpeg",
          header: {
            heading: "harumi_2",
            subheading: "há 15 minutos",
            profileImage: UserIcon1,
          },
        },
      ],
    },

    {
      id: 1,
      storyInfo: [
        {
          url: "https://images.pexels.com/photos/15858595/pexels-photo-15858595.jpeg",
          header: {
            heading: "harumi_2",
            subheading: "há 15 minutos",
            profileImage: UserIcon2,
          },
        },
        {
          url: "https://images.pexels.com/photos/36379628/pexels-photo-36379628.jpeg",
          header: {
            heading: "harumi_2",
            subheading: "há 15 minutos",
            profileImage: UserIcon2,
          },
        },
      ],
    },
  ];

  return (
    <div className="container-fluid d-flex justify-content-center min-100-vh bg-dark">
      {stories.map(
        (story) =>
          story.id == actualStory && (
            <Stories
              key={story.id}
              storyStyles={{ width: "100vw" }}
              stories={story.storyInfo}
              defaultInterval={4000}
              onAllStoriesEnd={() => {
                if (actualStory == stories.length - 1) {
                  setActualStory(0);
                } else {
                  setActualStory((prev) => prev + 1);
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
