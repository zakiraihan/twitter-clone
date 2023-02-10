import "./SidebarMoreOptions.css";

import { HomeFillIcon, HomeIcon, TopicsFillIcon, TopicsIcon, TwitterBlueIcon, TwitterCircleIcon } from "../../assets/icons/menu";

import { ArrowBottomIcon } from "../../assets/icons/common";
import React from 'react'
import SidebarNav from "../Sidebar/SidebarNav";

function SidebarMoreOptions(props) {
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
      child: [{
        title: "Analytics",
        icon: null
      }]
    },
    {
      title: "Professional Tools",
      child: [
        {
          title: "Twitter for Professionals",
          icon: null
        },
        {
          title: "Twitter Ads",
          icon: null
        },
        {
          title: "Monetization",
          icon: null
        },
      ]
    },
    {
      title: "Settings and Support",
      child: [
        {
          title: "Settings and Privacy",
          icon: null
        },
        {
          title: "Help Center",
          icon: null
        },
        {
          title: "Display",
          icon: null
        },
        {
          title: "Keyboard shortcuts",
          icon: null
        },
      ]
    }
  ]

  return (
    <div className="sidebar-more-option-container">
      {moreNavItems.map((item, index) => (
        <div className="sidebar-more-option">
          <SidebarNav 
            key={index} 
            navItem={item}
            // onClick={handleNavItemClick}
            isActive={true}
            counter={0}
          />
        </div>
      ))}
      <div className="sidebar-more-option-separator"></div>
      {dropDownItems.map((item, index) => (
        <div className="sidebar-more-option-dropdown">
          <p>{ item.title }</p>
          <img
            src={ ArrowBottomIcon }
            alt="Arrow bottom"
          />
        </div>
      ))}
    </div>
  )
}

export default SidebarMoreOptions