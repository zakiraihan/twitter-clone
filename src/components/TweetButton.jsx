import "./TweetButton.css";

export default function TweetButton(props) {
  
  return (
    <div className="tweet-button">
        Tweet
        {props.disabled &&
          <div className="tweet-button-disabled">

          </div>
        }
    </div>
  )
}