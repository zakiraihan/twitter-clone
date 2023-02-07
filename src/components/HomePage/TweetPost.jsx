import "./TweetPost.css";

import { EmojiIcon, GifIcon, PhotoIcon, PollIcon } from "../../assets/icons/tweet";
import { useLayoutEffect, useRef, useState } from "react";

import TweetButton from "../TweetButton";
import TweetContainer from "../TweetContainer";

const MIN_TEXTAREA_HEIGHT = 32;

export default function TweetPost(props) {
  const textareaRef = useRef(null);
  const [value, setValue] = useState("");
  const onChange = (event) => setValue(event.target.value);

  useLayoutEffect(() => {
    // Reset height - important to shrink on delete
    textareaRef.current.style.height = "inherit";
    // Set height
    textareaRef.current.style.height = `${Math.max(
      textareaRef.current.scrollHeight,
      MIN_TEXTAREA_HEIGHT
    )}px`;
  }, [value]);

  return (
    <TweetContainer
      profilePict={props.profilePict}
      marginTop={"110px"}
      type={"POST"}
    >
      <div className="tweet-post-container">
        <textarea
          onChange={onChange}
          ref={textareaRef}
          placeholder="What's happening?"
          style={{
            minHeight: MIN_TEXTAREA_HEIGHT,
            resize: "none"
          }}
          value={value}
        />
        <div className="tweet-post-setting">
          <img src={PhotoIcon}/>
          <img src={GifIcon}/>
          <img src={PollIcon}/>
          <img src={EmojiIcon}/>
          <TweetButton />
        </div>
      </div>  
    </TweetContainer>
  )
}