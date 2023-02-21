import "./TweetContainer.css";

export default function TweetContainer({ 
  children, 
  marginTop, 
  profilePict, 
  showBottomBorder = true,
  showProfilePict = true,
  backgroundClickAble = false,
  onClickBackground = () => {} 
}) {
  const tweetContainerStyle = {
    marginTop: marginTop || "0px",
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
      {showProfilePict &&
        <div className="tweet-profile-pict">
          <img
            src={profilePict}
            alt="User profile"
          />
        </div>
      }
      
      { children }
    </div>
  )
}