import "./TweetView.css";

import { AnalyticsIcon, LikeIcon, ReplyIcon, RetweetIcon, ShareIcon } from "../assets/icons/tweet";

import TweetContainer from "./TweetContainer";

export default function TweetView({
  tweet,
  showBottomBorder = true,
  showLeftProfile = true,
}) {
  const {
    profilePict,
    fullName,
    username,
    date,
    text,
    images,
    statistic,
    quoteTweet,
    activity,
  } = tweet;

  function statisticNumberFormattor(statisticNumber) {
    if (statisticNumber / 10000 >= 1) return `${(statisticNumber / 1000).toFixed(1)}K`;

    return statisticNumber;
  }

  function fullnameFormattor(fullName){
    if (fullName.length > 39) return `${fullName.slice(0, 39)}...`;

    return fullName;
  }

  return (
    <TweetContainer
      profilePict={profilePict}
      showBottomBorder={showBottomBorder}
      showProfilePict={showLeftProfile}
      backgroundClickAble={true}
      activity={activity}
    >
      <div className="tweet-view-container">
        <div className="tweet-view-area">
          <div className="tweet-view-user">
            {!showLeftProfile &&
              <img
                src={profilePict}
                alt="Profile"
              />
            }
            <p className="full-name">{fullnameFormattor(fullName)}</p>
            <p className="username">{username} &#183; {date}</p>
          </div>
          { text &&
            <div className="tweet-view-text">
              {text}
            </div>
          }
          { quoteTweet &&
            <div className="tweet-quote-container">
              <TweetView
                tweet={quoteTweet}
                showBottomBorder={false}
                showLeftProfile={false}
              />
            </div>
          }
          { images && images.length === 1 &&
            <img className="tweet-view-one-image" src={images[0]} alt="Tweets"/>
          }
        </div>
        {statistic &&
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
              <div className="reply-icon-container">
                <AnalyticsIcon className="reply-icon"/>
              </div>
              { statistic.replies > 0 &&
                <p className="reply-icon-text">{ statisticNumberFormattor(statistic.replies) }</p>
              }
            </div>
            <div className="tweet-view-statistic-icon-container">
              <div className="share-icon-container">
                <ShareIcon className="share-icon"/>
              </div>
            </div>
          </div>
        }
      </div>
    </TweetContainer>
  )
}