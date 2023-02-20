import "./ProfileTabs.css";

import { memo, useEffect } from "react";

import Loading from "../Loading";
import TweetView from "../TweetView";
import { homeTweet } from "../../mockData/homeTweet";
import { tabTypes } from "../../views/Profile";
import { useCallback } from "react";
import { useState } from "react";

let ProfileTabs = ({
  onUpdateTabDataCounts,
  onChangeTab,
  currentActiveTab
}) => {
  
  // #region States
  const [tweets, setTweets] = useState({
    countFetch: -1,
    isLoading: false,
    items: []
  });
  const [tweetAndReplies, setTweetAndReplies] = useState({
    countFetch: -1,
    isLoading: false,
    items: []
  });
  const [media, setMedia] = useState({
    countFetch: -1,
    isLoading: false,
    items: []
  });
  const [likes, setLikes] = useState({
    countFetch: -1,
    isLoading: false,
    items: []
  })
  // #endregion

  // #region Function or hooks
  function onClickTab(tabTypeKey) {
    onChangeTab(tabTypeKey);
  }

  const fetchTweets = useCallback((tabType) => {
    // const URL = `http://backend.com/tweets?tab=${tabType}`;
    // console.log(tabType)
    // Implement fetch function here
    return homeTweet;
  }, [])
  // #endregion

  // #region useEffect
  useEffect(() => {
    if (
      !tweets.isLoading &&
      !tweetAndReplies.isLoading &&
      !media.isLoading &&
      !likes.isLoading
    ) {
      const {
        tweets: tabTypeTweet, 
        tweetAndReplies: tabTypeTweetAndReplies, 
        media: tabTypeMedia, 
        likes: tabTypeLikes
      } = tabTypes;
      if (currentActiveTab === tabTypeTweet) {
        setTweets(prevState => ({
          ...prevState,
          countFetch: prevState.countFetch + 1,
          isLoading: true
        }));
      } else if (currentActiveTab === tabTypeTweetAndReplies) {
        setTweetAndReplies(prevState => ({
          ...prevState,
          countFetch: prevState.countFetch + 1,
          isLoading: true
        }));
      } else if (currentActiveTab === tabTypeMedia) {
        setMedia(prevState => ({
          ...prevState,
          countFetch: prevState.countFetch + 1,
          isLoading: true
        }));
      } else if (currentActiveTab === tabTypeLikes) {
        setLikes(prevState => ({
          ...prevState,
          countFetch: prevState.countFetch + 1,
          isLoading: true
        }));
      } 
    }
    return () => {};
  }, [currentActiveTab]); // eslint-disable-line react-hooks/exhaustive-deps
  
  useEffect(() => {
    if (tweets.countFetch >= 0) {
      let fetchedTweet = [];
      setTimeout(() => {
        fetchedTweet = fetchTweets(tabTypes.tweets);
        setTweets(prevState => {
          return {
            ...prevState,
            isLoading: false,
            items:[
              ...prevState.items,
              ...fetchedTweet 
            ]
          }
        })
      }, 2000);
    }
  }, [tweets.countFetch, fetchTweets]);

  useEffect(() => {
    if (tweetAndReplies.countFetch >= 0) {
      setTweetAndReplies(prevState => ({
        ...prevState,
        isLoading: false,
        items:[
          ...prevState.items,
        ]
      }))
    }
  }, [tweetAndReplies.countFetch]);

  useEffect(() => {
    if (media.countFetch >= 0) {
      setMedia(prevState => ({
        ...prevState,
        isLoading: false,
        items:[
          ...prevState.items,
        ]
      }))
    }
  }, [media.countFetch]);

  useEffect(() => {
    if (likes.countFetch >= 0) {
      setLikes(prevState => ({
        ...prevState,
        isLoading: false,
        items:[
          ...prevState.items,
        ]
      }))
    }
  }, [likes.countFetch]);

  useEffect(() => {
    onUpdateTabDataCounts(tabTypes.tweets, tweets.items.length)
  }, [tweets.items, onUpdateTabDataCounts])
  // #endregion
  
  // #region Render tab content
  const TabContent = () => {
    switch (currentActiveTab) {
      case tabTypes.tweets:
        return renderContent(tweets);
      case tabTypes.tweetAndReplies:
        return renderContent(tweetAndReplies);
      case tabTypes.media:
        return renderContent(media);
      case tabTypes.likes:
        return renderContent(likes);
      default:
        return;
    };
  }

  function renderContent(activeTab) {
    return (
      <>
        {activeTab.items.map((item, index) => (
          <TweetView 
            key={index}
            tweet={item}
          />
        ))}
        {!activeTab.isLoading && activeTab.items.length === 0 && 
          <EmptyTab />
        }
        {activeTab.isLoading &&
          <div style={{width: "100%", display: "flex", justifyContent: "center", marginBlock: "20px"}}>
            <Loading size={40}/>
          </div>
        }
      </>
    )
  }

  function EmptyTab() {
    let content;
    if (currentActiveTab === tabTypes.media) {
      content = {
        image: require("../../assets/images/profile-no-media.png"),
        title: "Lights, camera … attachments!",
        description: "When you send Tweets with photos or videos in them, they will show up here."
      }
    }
    else if (currentActiveTab === tabTypes.likes) {
      content = {
        title: "You don’t have any likes yet",
        description: "Tap the heart on any Tweet to show it some love. When you do, it’ll show up here."
      }
    }
    
    if (!content) return null;

    return (
      <div className="profile-empty-tab-container">
        <div className="profile-empty-tab-inner-container">
          {content?.image &&
            <img
              src={content?.image}
              alt="empty tab"
            />
          }
          <div className="profile-empty-tab-title">
            {content?.title}
          </div>
          <div className="profile-empty-tab-description">
            {content?.description}
          </div>
        </div>
      </div>
    )
  } 
  // #endregion

  return (
    <div className="profile-tabs-container">
      <div className="profile-tabs-item-container">
        {Object.keys(tabTypes).map((key, index) => (
          <div 
            key={index} 
            className="profile-tabs-item" 
            onClick={() => onClickTab(key)}
            style={
              currentActiveTab === tabTypes[key] ?
              { color: "#E7E9EA" } : null
            }
          >
            <div className="profile-tabs-item-text"> 
              { tabTypes[key] }
              { currentActiveTab === tabTypes[key] &&
                <div className="profile-tabs-item-underline"/>
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