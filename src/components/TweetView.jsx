import "./TweetView.css";

import { LikeIcon, ReplyIcon, RetweetIcon, ShareIcon } from "../assets/icons/tweet";

import TweetContainer from "./TweetContainer";

export default function TweetView(props) {
  return (
    <TweetContainer
      profilePict={props.tweet.profilePict}
    >
      <div className="tweet-view-container">
        <div className="tweet-view-area">
          <div className="tweet-view-user">
            <p className="full-name">{props.tweet.fullName}</p>
            <p className="username">{props.tweet.username} &#183; {props.tweet.date}</p>
          </div>
          { props.tweet.text &&
            <div className="tweet-view-text">
              {props.tweet.text}
            </div>
          }
          { props.tweet.images && props.tweet.images.length === 1 &&
            <img className="tweet-view-one-image" src={props.tweet.images[0]}/>
          }
        </div>
        <div className="tweet-view-statistic">
          <img src={ReplyIcon}/>
          <img src={RetweetIcon}/>
          <img src={LikeIcon}/>
          <img src={ShareIcon}/>
        </div>
      </div>
    </TweetContainer>
  )
}