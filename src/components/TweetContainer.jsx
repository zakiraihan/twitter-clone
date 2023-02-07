import "./TweetContainer.css";

export default function TweetContainer(props) {
  const tweetContainerStyle = {
    marginTop: props.marginTop || "0px"
  }

  return (
    <div className="tweet-container" style={tweetContainerStyle}>
        <div className="tweet-profile-pict">
          <img
            src={props.profilePict}
            alt="User profile picture"
          />
        </div>
        
        { props.children }
      </div>
  )
}