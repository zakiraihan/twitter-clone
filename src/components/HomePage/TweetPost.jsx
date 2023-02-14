import "./TweetPost.css";
import 'react-circular-progressbar/dist/styles.css';

import { ArrowBottomBlueIcon, GlobeIcon } from "../../assets/icons/common";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { EmojiIcon, GifIcon, PhotoIcon, PollIcon } from "../../assets/icons/tweet";
import { useLayoutEffect, useRef, useState } from "react";

import TweetButton from "../TweetButton";
import TweetContainer from "../TweetContainer";

const MIN_TEXTAREA_HEIGHT = 32;

export default function TweetPost(props) {
  const textareaRef = useRef(null);
  const [isTextAreaFocused, setIsTextAreaFocused] = useState(false);
  const [tweetVal, setTweetVal] = useState("");
  const charLeft = 140 - tweetVal.replace(/\n/g, "").length
  
  const onChange = (event) => setTweetVal(event.target.value);
  const onFocus = () => setIsTextAreaFocused(true); 

  function tweetProgressColor() {
    if (charLeft > 20) return "#1D9BF0";
    else if (charLeft > 0) return "#FFD400";
    else return "#F4212E"; 
  }

  function adjustTweetProgressSize() {
    let size = "20px";

    if (charLeft <= 20) size = "30px";

    return {
      width: size,
      height: size
    }
  }

  useLayoutEffect(() => {
    // Reset height - important to shrink on delete
    textareaRef.current.style.height = "inherit";
    // Set height
    textareaRef.current.style.height = `${Math.max(
      textareaRef.current.scrollHeight,
      MIN_TEXTAREA_HEIGHT
    )}px`;
  }, [tweetVal]);

  return (
    <TweetContainer
      profilePict={props.profilePict}
      marginTop={"110px"}
      type={"POST"}
    >
      <div className="tweet-post-container">
        {isTextAreaFocused &&
          <div className="tweet-audience">
            Everyone
            <img src={ ArrowBottomBlueIcon } alt="Audience arrow"/>
          </div>
        }
        <textarea
          onChange={onChange}
          onFocus={onFocus}
          ref={textareaRef}
          placeholder="What's happening?"
          value={tweetVal}
        />
        {isTextAreaFocused &&
          <div className="tweet-reply">
            <img src={ GlobeIcon } alt="Reply globe"/>
            Everyone can reply
          </div>
        }
        <div className="tweet-post-setting">
          <img src={PhotoIcon}/>
          <img src={GifIcon}/>
          <img src={PollIcon}/>
          <img src={EmojiIcon}/>
          <div className="tweet-post-setting-right">
            {tweetVal.length > 0 &&
              <div style={adjustTweetProgressSize()}>
                <CircularProgressbar 
                  value={tweetVal.length} 
                  maxValue={140} 
                  text={charLeft > 20 ? "" : `${charLeft}`}
                  styles={buildStyles({
                    textSize: '35px',
                    textColor: tweetProgressColor(),
                    pathColor: tweetProgressColor(),
                    trailColor: "#2F3336",
                  })}
                />
              </div>
            }
            
            <TweetButton disabled={!(tweetVal.length > 0 && tweetVal.length < 140)}/>
          </div>
        </div>
      </div>  
    </TweetContainer>
  )
}