import "./SidebarNav.css";

import { useEffect, useRef, useState } from "react";

import { modalEnum } from "../../enum/modalEnum";
import { showModal } from "../../slices/modalSlice";
import { useDispatch } from "react-redux";

export default function SidebarNav(props) {
  const dispatch = useDispatch();
  
  const buttonRef = useRef();
  const [buttonPosition, setButtonPosition] = useState({
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  })

  function getPosition() {
    const { offsetParent, offsetTop, offsetHeight} = buttonRef.current;
    const left = offsetParent.offsetLeft;
    const bottom = offsetParent.offsetHeight - offsetTop - (2 * offsetHeight);
    setButtonPosition({
      bottom,
      left
    })
  };

  function onClickNavItem() {
    if (props.navItem.text === "More") {
      dispatch(showModal({
        type: modalEnum.sidebarMoreOption,
        style: buttonPosition,
        props: {}
      }))
      return;    
    }

    props.onClick(props.navItem);
  }

  useEffect(() => {
    if (props.navItem.text === "More") {
      getPosition();
      window.addEventListener("resize", getPosition);
    }

    return (() => {
      if (props.navItem.text === "More") {
        window.removeEventListener("resize", getPosition);
      }
    })
  }, [props.navItem.text]);

  return (
    <>
      <div 
        className="sidebar-nav-item"
        onClick={onClickNavItem}
        ref={buttonRef}
      >
        <div className="sidebar-nav-item-icon">
          <img
            src={props.isActive ? props.navItem.iconFill : props.navItem.icon}
            alt={props.navItem.text + " navigation"}
          />
          
          {props.counter > 0 &&
            <div className="sidebar-nav-item-counter">
              {props.counter}
            </div>
          }  
        </div>
        <div 
          className="sidebar-nav-item-text"
          style={{
            fontWeight: props.isActive ? "bold": "400"
          }}
        >
          {props.navItem.text}
        </div>
      </div>
    </>
  )                                             
}