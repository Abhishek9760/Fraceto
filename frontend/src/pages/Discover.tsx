import React, { useState, useEffect, useRef } from "react";

import { AvatarStacked, Post, Creator } from "../components/Discover";
import { SectionHeading } from "../components/utils/SectionHeading";
import { Tabs } from "../components/Profile";
import VideoCard from "../components/VideoCard/VideoCard";
import { Model } from "../components/utils/Model";

const tabs = [
  {
    name: "Recent Posts",
    id: 1,
  },
  {
    name: "Creators",
    id: 2,
  },
  {
    name: "By Location",
    id: 3,
  },
];

const videoUrls = [
  {
    url: "/video.mp4",
    profilePic:
      "https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/9d429ac49d6d18de6ebd2a3fb1f39269~c5_100x100.jpeg?x-expires=1688479200&x-signature=pjH5pwSS8Sg1dJqbB1GdCLXH6ew%3D",
    username: "csjackie",
    description: "Lol nvm #compsci #chatgpt #ai #openai #techtok",
    song: "Original sound - Famed Flames",
    likes: 430,
    comments: 13,
    saves: 23,
    shares: 1,
  },
{
    url: "/video.mp4",
    profilePic:
      "https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/9d429ac49d6d18de6ebd2a3fb1f39269~c5_100x100.jpeg?x-expires=1688479200&x-signature=pjH5pwSS8Sg1dJqbB1GdCLXH6ew%3D",
    username: "csjackie",
    description: "Lol nvm #compsci #chatgpt #ai #openai #techtok",
    song: "Original sound - Famed Flames",
    likes: 430,
    comments: 13,
    saves: 23,
    shares: 1,
  }
];

const Discover = () => {
  const [currentTab, setCurrentTab] = useState(1);

  const [videos, setVideos] = useState([]);
  const videoRefs = useRef([]);

  useEffect(() => {
    setVideos(videoUrls);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.8, // Adjust this value to change the scroll trigger point
    };

    // This function handles the intersection of videos
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const videoElement = entry.target;
          videoElement.play();
        } else {
          const videoElement = entry.target;
          videoElement.pause();
        }
      });
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    // We observe each video reference to trigger play/pause
    videoRefs.current.forEach((videoRef) => {
      observer.observe(videoRef);
    });

    // We disconnect the observer when the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, [videos]);

  // This function handles the reference of each video
  const handleVideoRef = (index) => (ref) => {
    videoRefs.current[index] = ref;
  };

  return (
    <div className="mx-auto max-w-7xl px-6 pt-4 sm:pt-8 lg:px-8">
      <SectionHeading>Discover</SectionHeading>
      <AvatarStacked />

      <Tabs tabs={tabs} currentTab={currentTab} setCurrentTab={setCurrentTab} />
      {currentTab === 1 && (

        <Model>
        <div
          style={{
            height: "100vh",
            backgroundColor: "#000",
            display: "grid",
            placeItems: "center",
            position: 'absolute'
          }}
        >
          <div
            style={{
              position: "relative",
              height: "667px",
              width: "375px",
              borderRadius: "25px",
              overflow: "scroll",
              scrollSnapType: "y mandatory",
            }}
          >
            {/* <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post /> */}
          

            {videos.map((video, index) => (
              <VideoCard
                key={index}
                username={video.username}
                description={video.description}
                song={video.song}
                likes={video.likes}
                saves={video.saves}
                comments={video.comments}
                shares={video.shares}
                url={video.url}
                profilePic={video.profilePic}
                setVideoRef={handleVideoRef(index)}
                autoplay={index === 0}
              />
            ))}
          
          </div>
        </div>
</Model>
      )}
      {currentTab === 2 && (
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Creator />
          <Creator />
          <Creator />
          <Creator />
          <Creator />
        </div>
      )}
    </div>
  );
};

export default Discover;
