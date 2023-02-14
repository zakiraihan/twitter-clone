import "./SidebarMoreOptions.css";

import {
  AdsIcon,
  AnalyticsIcon,
  DisplayIcon,
  HelpIcon,
  HomeFillIcon,
  HomeIcon,
  MonetizationIcon,
  ProfessionalsIcon,
  SettingsIcon,
  ShortcutIcon,
  TopicsFillIcon,
  TopicsIcon,
  TwitterBlueIcon,
  TwitterCircleIcon
} from "../../assets/icons/menu";
import { ArrowBottomIcon, ArrowUpIcon } from "../../assets/icons/common";
import React, { useEffect } from 'react'

import SidebarNav from "../Sidebar/SidebarNav";
import { useState } from "react";

//#region Constant
const dropDown = {
  CREATOR: "CREATOR",
  PROFESSIONAL: "PROFESSIONAL",
  SETTINGS: "SETTINGS"
}

const moreNavItems = [
  {
    icon: TopicsIcon,
    iconFill: TopicsIcon,
    text: "Topics"
  },
  {
    icon: TwitterBlueIcon,
    iconFill: TwitterBlueIcon,
    text: "Twitter Blue"
  },
  {
    icon: TwitterCircleIcon,
    iconFill: TwitterCircleIcon,
    text: "Twitter Circle"
  },
]

const dropDownItems = [
  {
    title: "Creator Studio",
    type: dropDown.CREATOR,
    childs: [{
      title: "Analytics",
      icon: AnalyticsIcon
    }]
  },
  {
    title: "Professional Tools",
    type: dropDown.PROFESSIONAL,
    childs: [
      {
        title: "Twitter for Professionals",
        icon: ProfessionalsIcon
      },
      {
        title: "Twitter Ads",
        icon: AdsIcon
      },
      {
        title: "Monetization",
        icon: MonetizationIcon
      },
    ]
  },
  {
    title: "Settings and Support",
    type: dropDown.SETTINGS,
    childs: [
      {
        title: "Settings and Privacy",
        icon: SettingsIcon
      },
      {
        title: "Help Center",
        icon: HelpIcon
      },
      {
        title: "Display",
        icon: DisplayIcon
      },
      {
        title: "Keyboard shortcuts",
        icon: ShortcutIcon
      },
    ]
  }
]
// #endregion

function SidebarMoreOptions({ style }) {
  
  const [selectedDropdown, setSelectedDropdown] = useState("");

  function onClickDropdown(item) {
    if (selectedDropdown === item.type) {
      setSelectedDropdown("");
      return;
    }

    setSelectedDropdown(item.type);
  }

  function onClickDropdownChild(item) {
    window.open('https://www.google.com', '_blank');
  }

  return (
    <div className="sidebar-more-option-modal-container" style={ style }>
      <div className="sidebar-more-option-container">
        {moreNavItems.map((item, index) => (
          <div className="sidebar-more-option" key={item.text}>
            <SidebarNav 
              key={item.text} 
              navItem={item}
              // onClick={handleNavItemClick}
              isActive={true}
              counter={0}
            />
          </div>
        ))}
        <div className="sidebar-more-option-separator"></div>
        {dropDownItems.map((item, index) => (
          <>
            <div 
              className="sidebar-more-option-dropdown"
              onClick={() => onClickDropdown(item)}
              key={ item.title }
            >
              <p>{ item.title }</p>
              <img
                src={ selectedDropdown === item.type ? ArrowUpIcon : ArrowBottomIcon }
                style={selectedDropdown === item.type ? {
                  width: "13px",
                  marginRight: "2px"
                } : null}
                alt="Arrow bottom"
              />
            </div>
            {selectedDropdown === item.type &&
              (item.childs.map((child, childIndex) => (
                <div 
                  className="sidebar-more-option-dropdown-child"
                  onClick={() => onClickDropdownChild(child)}
                  key={ child.title }
                >
                  <img
                    src={ child.icon }
                    alt={`Child dropdown: ${child.title}`}
                  />
                  <p>{ child.title }</p>
                </div>
              )))
            }
          </>
        ))}
      </div>
    </div>
  )
}

export default SidebarMoreOptions