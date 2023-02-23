import "./TweetView.css";

import { AnalyticsIcon, LikeIcon, ReplyIcon, RetweetIcon, ShareIcon } from "../assets/icons/tweet";
import { fullnameFormattor, statisticNumberFormattor } from "../utils/stringFormattor";

import MoreButton from "./MoreButton";
import TimeAgo from "./TimeAgo";
import TweetContainer from "./TweetContainer";
import { useRef } from "react";
import { useState } from "react";

export default function TweetView({
  tweet,
  showBottomBorder = true,
  showLeftProfile = true,
  showMoreButton = true,
  hasThreadReply = false,
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
    threadReply,
  } = tweet;

  const [showMoreOptions, setShowMoreOptions] = useState(false);

  const moreOptionRef = useRef(null);

  function onClickMoreOption() {
    const bottom = moreOptionRef.current.getBoundingClientRect().bottom;
    alert(`Space to bottom: ${window.innerHeight - bottom}`);
  }

  const TweetsThreadReplies = () => threadReply.map((item, index) => (
    <TweetView
      key={item.id}
      tweet={item}
      hasThreadReply={index < threadReply.length - 1}
    />
  ))

  return (
    <>
      <TweetContainer
        profilePict={profilePict}
        showBottomBorder={showBottomBorder}
        showProfilePict={showLeftProfile}
        backgroundClickAble={true}
        hasThreadReply={hasThreadReply || threadReply?.length > 0}
        activity={activity}
      >
        <div className="tweet-view-container">
          { showMoreButton &&
            <div className="tweet-view-more-container" ref={moreOptionRef}>
              <MoreButton onClick={onClickMoreOption} />
            </div>
          }
          <div className="tweet-view-area">
            <div className="tweet-view-user">
              {!showLeftProfile &&
                <img
                  src={profilePict}
                  alt="Profile"
                />
              }
              <p className="full-name">{fullnameFormattor(fullName)}</p>
              <p className="username">{username} &#183; <TimeAgo timestamp={date}/></p>
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
                  showMoreButton={false}
                  showBottomBorder={false}
                  showLeftProfile={false}
                />
              </div>
            }
            { images && (
              ( 
                images.length === 1 &&
                <img className="tweet-view-one-image" src={images[0]} alt="Tweets"/>
              ) ||
              (
                images.length === 2 &&
                <div className="tweet-view-multi-image-container">
                  {images.map((image, index) => (
                    <img key={index} className="tweet-view-two-image" src={image} alt="Tweets"/>
                  ))}
                </div>
              ) ||
              (
                images.length === 3 &&
                <div className="tweet-view-multi-image-container">
                  <img key={0} className="tweet-view-two-image" src={images[0]} alt="Tweets"/>
                  <div className="tweet-view-right-column">
                    {images.slice(1, 3).map((image, index) => (
                      <img key={index} className="tweet-view-four-image" src={image} alt="Tweets"/>
                    ))}
                  </div>
                </div>
              ) ||
              (
                images.length === 4 &&
                <div className="tweet-view-multi-image-container tweet-view-multi-image-two-row">
                  {images.map((image, index) => (
                    <img key={index} className="tweet-view-four-image" src={image} alt="Tweets"/>
                  ))}
                </div>
              )
            )}
          </div>
          {statistic &&
            <div className="tweet-view-statistic">
              <div className="tweet-view-statistic-icon-container">
                <div className="reply-icon-container">
                  <ReplyIcon className="reply-icon"/>
                  <div className="statistic-icon-text">
                    Reply
                  </div>
                </div>
                { statistic.replies > 0 &&
                  <p className="reply-icon-text">{ statisticNumberFormattor(statistic.replies) }</p>
                }
              </div>
              <div className="tweet-view-statistic-icon-container">
                <div className="retweet-icon-container">
                  <RetweetIcon className="retweet-icon"/>
                  <div className="statistic-icon-text">
                    Retweet
                  </div>
                </div>
                { statistic.retweets > 0 &&
                  <p className="retweet-icon-text">{ statisticNumberFormattor(statistic.retweets) }</p>
                }
              </div>
              <div className="tweet-view-statistic-icon-container">
                <div className="like-icon-container">
                  <LikeIcon className="like-icon"/>
                  <div className="statistic-icon-text">
                    Like
                  </div>
                </div>
                { statistic.likes > 0 &&
                  <p className="like-icon-text">{ statisticNumberFormattor(statistic.likes) }</p>
                }
              </div>
              <div className="tweet-view-statistic-icon-container">
                <div className="reply-icon-container">
                  <AnalyticsIcon className="reply-icon"/>
                  <div className="statistic-icon-text">
                    View
                  </div>
                </div>
                { statistic.replies > 0 &&
                  <p className="reply-icon-text">{ statisticNumberFormattor(statistic.views) }</p>
                }
              </div>
              <div className="tweet-view-statistic-icon-container">
                <div className="share-icon-container">
                  <ShareIcon className="share-icon"/>
                  <div className="statistic-icon-text">
                    Share
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
      </TweetContainer>
      { threadReply && <TweetsThreadReplies />}
    </>
  )
}