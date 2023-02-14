import "./MessageBar.css";

import { DoubleArrowUpIcon, NewMessageIcon, PlusIcon } from "../../assets/icons/bottom-message";

import React from 'react'
import { useState } from "react";

function MessageBar(props) {
  const [arrowRotate, setArrowRotate] = useState(0);
  const [messageBarHeight, setMessageBarHeight] = useState("52px");


  function onClickExpand(event) {
    event.preventDefault();
    setArrowRotate((prevArrowRotate) => {
      var rotateTo = (prevArrowRotate + 180) % 360;
      return rotateTo;
    })
    setMessageBarHeight((prevMessageBarHeight) => {
      if (prevMessageBarHeight === "52px") return "75vh";
      return "52px";
    })
  }

  return (
    <div 
      className="messagebar-container"
      style={{
        height: messageBarHeight
      }}
    >
      <div className="messagebar-header-container" onClick={onClickExpand}>
        <div className="messagebar-title">
          Messages
        </div>
        <div className="messagebar-images-container" onClick={(event) => {
           event.stopPropagation();
        }}>
          <div className="messagebar-image-container">
            <div className="messagebar-image-text">
              New message
            </div>
            <img src={ NewMessageIcon } alt="Message icon" className="messagebar-envelope-icon"/>
            <img src={ PlusIcon } alt="Message icon" className="messagebar-plus-icon"/>
          </div>
          <div className="messagebar-image-container" 
              onClick={onClickExpand}>
            <div className="messagebar-image-text">
              Expand
            </div>
            <img 
              src={ DoubleArrowUpIcon } 
              alt="Message icon" 
              className="messagebar-arrow-icon"
              style={{
                transform: `rotate(${arrowRotate}deg)`
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MessageBar