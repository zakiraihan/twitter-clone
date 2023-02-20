import "./TweetView.css";

import { LikeIcon, ReplyIcon, RetweetIcon, ShareIcon } from "../assets/icons/tweet";

import TweetContainer from "./TweetContainer";

export default function TweetView(props) {
  const {
    profilePict,
    fullName,
    username,
    date,
    text,
    images,
    statistic
  } = props.tweet;

  function statisticNumberFormattor(statisticNumber) {
    if (statisticNumber / 10000 >= 1) return `${(statisticNumber / 1000).toFixed(1)}K`;

    return statisticNumber;
  }

  return (
    <TweetContainer
      profilePict={profilePict}
    >
      <div className="tweet-view-container">
        <div className="tweet-view-area">
          <div className="tweet-view-user">
            <p className="full-name">{fullName}</p>
            <p className="username">{username} &#183; {date}</p>
          </div>
          { props.tweet.text &&
            <div className="tweet-view-text">
              {text}
            </div>
          }
          { images && images.length === 1 &&
            <img className="tweet-view-one-image" src={images[0]} alt="Tweets"/>
          }
        </div>
        <div className="tweet-view-statistic">
          <div className="tweet-view-statistic-icon-container">
            <div className="reply-icon-container">
              <ReplyIcon className="reply-icon"/>
            </div>
            { statistic.replies > 0 &&
              <p className="reply-icon-text">{ statisticNumberFormattor(statistic.replies) }</p>
            }
          </div>
          <div className="tweet-view-statistic-icon-container">
            <div className="retweet-icon-container">
              <RetweetIcon className="retweet-icon"/>
            </div>
            { statistic.retweets > 0 &&
              <p className="retweet-icon-text">{ statisticNumberFormattor(statistic.retweets) }</p>
            }
          </div>
          <div className="tweet-view-statistic-icon-container">
            <div className="like-icon-container">
              <LikeIcon className="like-icon"/>
            </div>
            { statistic.likes > 0 &&
              <p className="like-icon-text">{ statisticNumberFormattor(statistic.likes) }</p>
            }
          </div>
          <div className="tweet-view-statistic-icon-container">
            <div className="share-icon-container">
              <ShareIcon className="share-icon"/>
            </div>
          </div>
        </div>
      </div>
    </TweetContainer>
  )
}