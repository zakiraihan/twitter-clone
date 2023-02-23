import "./TrendingItem.css";

import MoreButton from "./MoreButton";

export default function TrendingItem(props) {
  const TrendingType = () => {
    if (props.item.location) {
      return (
        <p className="trending-location">
          Trending in {props.item.location}
        </p>
      )
    } else if (props.item.topic) {
      return (
        <p className="trending-location">
          {props.item.topic} &#183; Trending
        </p>
      )
    }
  } 

  return (
    <div className="trending-item">
      <TrendingType />
      <p className="trending-word">{props.item.word}</p>
      {props.item.tweetCount && <p className="trending-tweet-count">{props.item.tweetCount} Tweets</p>}
      <MoreButton />
    </div>
  )
}