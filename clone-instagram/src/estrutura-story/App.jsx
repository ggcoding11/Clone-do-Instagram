import React, { useState } from "react";
import Stories from "react-insta-stories";
import MyUserIcon from "/photos/my-user-icon.jpg";
import UserIcon1 from "/photos/user-icon-1.jpg";

const App = () => {
  const [actualStory, setActualStory] = useState(0);

  const stories = [
    [
      {
        url: "https://images.pexels.com/photos/15858595/pexels-photo-15858595.jpeg",
        header: {
          heading: "mr_jeej_top",
          subheading: "há 15 minutos",
          profileImage: MyUserIcon,
        },
      },
      {
        url: "https://images.pexels.com/photos/36379628/pexels-photo-36379628.jpeg",
        header: {
          heading: "mr_jeej_top",
          subheading: "há 15 minutos",
          profileImage: MyUserIcon,
        },
      },
    ],
    [
      {
        url: "https://images.pexels.com/photos/7551752/pexels-photo-7551752.jpeg",
        header: {
          heading: "harumi_2",
          subheading: "há 15 minutos",
          profileImage: UserIcon1,
        },
      },

      {
        url: "https://images.pexels.com/photos/5935259/pexels-photo-5935259.jpeg",
        header: {
          heading: "harumi_2",
          subheading: "há 15 minutos",
          profileImage: UserIcon1,
        },
      },
    ],
  ];

  return (
    <div className="container-fluid d-flex justify-content-center min-100-vh bg-dark">
      {stories.map(
        (story, index) =>
          index == actualStory && (
            <Stories
              key={index}
              storyStyles={{ width: "100vw" }}
              stories={story}
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

export default App;
