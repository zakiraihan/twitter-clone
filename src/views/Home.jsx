import "./Home.css";

import { HomeHeader, TweetPost } from "../components/HomePage";
import { TrendingSection, TweetView } from "../components";
import { useEffect, useState } from "react";

import { homeTweet } from "../mockData/homeTweet";

export default function HomePage(props) {
  const [activeTab, setActiveTab] = useState(1);
  const [followingTweets, setFollowingTweets] = useState([]);
  const [forYouTweets, setForYouTweets] = useState([]);
  
  useEffect(() => {
    setFollowingTweets(homeTweet);
  }, [])

  function onClickTab(tabClicked) {
    setActiveTab(tabClicked);
  }

  return (
    <div className="page-container">
      <section className="page-left-container">
        <HomeHeader onClickTab={onClickTab} activeTab={activeTab}/>
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
      
      <TrendingSection showTrending={true} />
    </div>
  )
}