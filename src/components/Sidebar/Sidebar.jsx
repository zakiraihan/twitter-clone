import "./Sidebar.css";

import { ArrowBottomIcon } from "../../assets/icons/common";
import SidebarNav from "./SidebarNav";
import TweetButton from "../TweetButton";
import { TwitterIcon } from "../../assets/icons/menu";
import { navItems } from "./navItems";
import { useState } from "react";

export default function Sidebar(props) {
  
  const [currentActive, setCurrentActive] = useState(navItems[0].text);
  
  function handleNavItemClick(navItem) {
    setCurrentActive(navItem.text);
  }

  return  (
    <header className="sidebar">
        <div className="sidebar-container">
          <img 
            className="sidebar-tweet-logo"
            src={TwitterIcon}
          />

          <nav className="sidebar-nav">
            {navItems.map((item, index) => (
              <SidebarNav 
                key={index} 
                navItem={item}
                onClick={handleNavItemClick}
                isActive={item.text === currentActive}
                counter={item.text === "Notifications" ? 3 : 0}
              />
            ))}
          </nav>
          
          <div className="sidebar-tweet-button-container">
            <TweetButton className="sidebar-tweet-button"/>
          </div>
          

          <div className="sidebar-profile">
            <div className="sidebar-profile-pict">
              <img
                src={"https://pbs.twimg.com/profile_images/1614997164140433410/OM6aUbAO_400x400.jpg"}
                alt="User profile picture"
              />
            </div>
            <div className="sidebar-profile-user">
              <p className="full-name"> 
                Zaki Raihan
              </p>
              <p className="username">
                @narukami_80
              </p>
            </div>

            <div className="sidebar-profile-arrow">
              <img
                src={ArrowBottomIcon}
                alt="Arrow bottom"
              />
            </div>
          </div>
        </div>
    </header>
  )
}