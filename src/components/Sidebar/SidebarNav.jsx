import "./SidebarNav.css";

import { useState } from "react";

export default function SidebarNav(props) {

  const [showMoreOptions, setShowMoreOptions] = useState(false);

  function onClickNavItem() {
    // props.onClick(props.navItem);
    if (props.navItem.text === "More") {
      setShowMoreOptions(true);
    }
  }

  return (
    <>
      <a 
        className="sidebar-nav-item"
        onClick={onClickNavItem}
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
      </a>
    </>
  )                                             
}