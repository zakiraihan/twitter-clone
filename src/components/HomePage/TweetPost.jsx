import "./TweetPost.css";

import { ArrowBottomBlueIcon, GlobeIcon } from "../../assets/icons/common";
import { EmojiIcon, GifIcon, PhotoIcon, PollIcon } from "../../assets/icons/tweet";
import { useLayoutEffect, useRef, useState } from "react";

import TweetButton from "../TweetButton";
import TweetContainer from "../TweetContainer";

const MIN_TEXTAREA_HEIGHT = 32;

export default function TweetPost(props) {
  const textareaRef = useRef(null);
  const [tweetVal, setTweetVal] = useState("");
  const [isTextAreaFocused, setIsTextAreaFocused] = useState(false);

  const onChange = (event) => setTweetVal(event.target.value);
  const onFocus = () => setIsTextAreaFocused(true); 

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
          <TweetButton disabled={!(tweetVal.length > 0 && tweetVal.length < 140)}/>
        </div>
      </div>  
    </TweetContainer>
  )
}