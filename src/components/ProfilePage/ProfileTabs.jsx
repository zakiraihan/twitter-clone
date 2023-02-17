import "./ProfileTabs.css";

import { memo, useEffect } from "react";

import Loading from "../Loading";
import TweetView from "../TweetView";
import { homeTweet } from "../../mockData/homeTweet";
import { useState } from "react";

let ProfileTabs = (props) => {
  const [tweets, setTweets] = useState({
    countFetch: 0,
    isLoading: false,
    items: []
  });
  const [tweetAndReplies, setTweetAndReplies] = useState({
    countFetch: 0,
    isLoading: false,
    items: []
  });
  const [media, setMedia] = useState({
    countFetch: 0,
    isLoading: false,
    items: []
  });
  const [likes, setLikes] = useState({
    countFetch: 0,
    isLoading: false,
    items: []
  })

  function onClickTab(tabTypeKey) {
    props.onChangeTab(tabTypeKey);
  }

  // Use effect on initial;
  useEffect(() => {
    if (
      !tweets.isLoading &&
      !tweetAndReplies.isLoading &&
      !media.isLoading &&
      !likes.isLoading
    ) {
      if (props.currentActiveTab === props.tabTypes.tweets) {
        setTweets(prevState => ({
          ...prevState,
          countFetch: prevState.countFetch + 1,
          isLoading: true
        }));
      } else if (props.currentActiveTab === props.tabTypes.tweetAndReplies) {
        setTweetAndReplies(prevState => ({
          ...prevState,
          countFetch: prevState.countFetch + 1,
          isLoading: true
        }));
      } else if (props.currentActiveTab === props.tabTypes.media) {
        setMedia(prevState => ({
          ...prevState,
          countFetch: prevState.countFetch + 1,
          isLoading: true
        }));
      } else if (props.currentActiveTab === props.tabTypes.likes) {
        setLikes(prevState => ({
          ...prevState,
          countFetch: prevState.countFetch + 1,
          isLoading: true
        }));
      } 
    }
    return () => {};
  }, [props.currentActiveTab]);
  
  useEffect(() => {
    if (tweets.countFetch > 0) {
      setTweets(prevState => ({
        ...prevState,
        isLoading: false,
        items:[
          ...prevState.items,
          ...homeTweet
        ]
      }))
      console.log("here");
    }
  }, [tweets.countFetch]);

  useEffect(() => {
    if (tweetAndReplies.countFetch > 0) {
      setTweetAndReplies(prevState => ({
        ...prevState,
        isLoading: false,
        items:[
          ...prevState.items,
        ]
      }))
      console.log("here");
    }
  }, [tweetAndReplies.countFetch]);

  useEffect(() => {
    props.onUpdateTabDataCounts(props.tabTypes.tweets, tweets.items.length)
  }, [tweets.items])

  const TabContent = () => {
    switch (props.currentActiveTab) {
      case props.tabTypes.tweets:
        return renderContent(tweets);
      case props.tabTypes.tweetAndReplies:
        return renderContent(tweetAndReplies);
      case props.tabTypes.media:
        return renderContent(media);
      case props.tabTypes.likes:
        return renderContent(likes);
    };
  }

  function renderContent(activeTab) {
    if (activeTab.isLoading) {
      return (
        <div style={{width: "100%", display: "flex", justifyContent: "center", marginTop: "20px"}}>
          <Loading size={40}/>
        </div>
      )
    }
    else if (activeTab.items.length === 0) {

    }
    else {
      return activeTab.items.map((item, index) => (
        <TweetView 
          key={index}
          tweet={item}
        />
      ))
    }
  }

  return (
    <div className="profile-tabs-container">
      <div className="profile-tabs-item-container">
        {Object.keys(props.tabTypes).map((key, index) => (
          <div 
            key={index} 
            className="profile-tabs-item" 
            onClick={() => onClickTab(key)}
            style={
              props.currentActiveTab === props.tabTypes[key] ?
              {
                color: "#E7E9EA",
              } : null
            }
          >
            <div className="profile-tabs-item-text"> 
              { props.tabTypes[key] }
              { props.currentActiveTab === props.tabTypes[key] &&
                <div className="profile-tabs-item-underline">

                </div>
              }
            </div>
          </div>
        ))}
      </div>
      <div className="profile-tabs-content-container">
        <TabContent />
      </div>
    </div>
  )
}

ProfileTabs = memo(ProfileTabs);

export default ProfileTabs