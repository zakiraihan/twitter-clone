import "./TweetContainer.css";

import { LikeIcon, ReplyIcon, RetweetIcon } from "../assets/icons/tweet";

import { activityEnum } from "../enum/activityEnum";

export default function TweetContainer({ 
  children, 
  marginTop, 
  profilePict, 
  activity,
  showBottomBorder = true,
  showProfilePict = true,
  backgroundClickAble = false,
  onClickBackground = () => {} 
}) {
  const tweetContainerStyle = {
    marginTop: marginTop || "0px",
    paddingTop: activity ? "5px" : "10.5px",
    borderBottom: showBottomBorder ? "var(--borderStyles)" : "none",
    cursor: backgroundClickAble ? "pointer" : "default"
  }

  const containerClass = () => {
    const baseClass = "tweet-container";

    if (backgroundClickAble) return baseClass + " tweet-container-clickable";
    
    return baseClass;
  }

  const Activities = () => {
    return (
      <div className="tweet-activity-container">
        <div className="tweet-left-side-container tweet-activity">
          {
            (
              activity.type === activityEnum.retweeted && 
              <RetweetIcon className="tweet-activity-icon"/>
            ) ||
            (
              activity.type === activityEnum.replied && 
              <ReplyIcon className="tweet-activity-icon"/>
            ) ||
            (
              activity.type === activityEnum.liked && 
              <LikeIcon className="tweet-activity-icon"/>
            )
          }
        </div>
        {activity && `${activity.by} ${activity.type}`}
      </div>
    )
  }

  return (
    <div className={containerClass()} style={tweetContainerStyle} onClick={onClickBackground}>
      {activity &&
        <Activities />
      }
      <div className="tweet-inner-container">
        {showProfilePict &&
          <div className="tweet-left-side-container">
            <img
              className="tweet-left-side-profile"
              src={profilePict}
              alt="User profile"
            />
          </div>
        }
        
        { children }
      </div>
    </div>
  )
}