import "./Home.css";

import { useEffect, useState } from "react";

import { TweetPost } from "../components/HomePage";
import { TweetView } from "../components";
import { homeTweet } from "../mockData/homeTweet";

export default function HomePage(props) {
  const [activeTab, setActiveTab] = useState(1);
  const [followingTweets, setFollowingTweets] = useState([]);

  const activeTabStyle = {
    fontWeight: "bold",
    color: "white",
    paddingBottom: "2px"
  }

  const notActiveTabStyle = {
    fontWeight: "400",
    paddingBottom: "20px"
  }

  useEffect(() => {
    setFollowingTweets(homeTweet);
  }, [])

  function onClickTab(tabClicked) {
    setActiveTab(tabClicked);
  }

  return (
    <section className="home-container">
      <div className="home-header">
        <div className="home-header-top">
          Home
        </div>
        <div className="home-header-bottom">
          <div onClick={() => onClickTab(0)}>
            <div 
              className="home-header-bottom-text" 
              style={!activeTab ? activeTabStyle : notActiveTabStyle}
            >
              For you
              { !activeTab && <div className="home-header-bottom-text-border"/> }
            </div>
          </div>
          <div onClick={() => onClickTab(1)}>
            <div 
              className="home-header-bottom-text" 
              style={activeTab ? activeTabStyle : notActiveTabStyle}
            >
              Following
              { activeTab !== 0 && <div className="home-header-bottom-text-border"/> }
            </div>
          </div>
        </div>
      </div>
      <TweetPost 
        profilePict={"https://pbs.twimg.com/profile_images/1614997164140433410/OM6aUbAO_400x400.jpg"}
      />

      {followingTweets.map((item) => (
        <TweetView 
          key={item.id}
          tweet={item}
        />
      ))}
    </section>
  )
}