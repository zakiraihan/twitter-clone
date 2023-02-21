import "./TweetContainer.css";

import { RetweetIcon } from "../assets/icons/tweet";

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

  return (
    <div className={containerClass()} style={tweetContainerStyle} onClick={onClickBackground}>
      {activity &&
        <div className="tweet-activity-container">
          <div className="tweet-left-side-container" style={{ display: "flex", justifyContent: "flex-end", paddingRight: "15px" }}>
            <RetweetIcon className="tweet-activity-icon"/>
          </div>
          {activity && `${activity.by} retweeted`}
        </div>
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