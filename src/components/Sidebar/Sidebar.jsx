import "./Sidebar.css";

import { ArrowBottomIcon } from "../../assets/icons/common";
import SidebarNav from "./SidebarNav";
import TweetButton from "../TweetButton";
import { TwitterIcon } from "../../assets/icons/menu";
import { getUser } from "../../slices/userSlice";
import { navItems } from "./navItems";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function Sidebar(props) {
  const navigate = useNavigate();
  const [currentActive, setCurrentActive] = useState(navItems[0].text);

  const { fullname, username, photo: profilePicture } = useSelector(getUser);
  
  function handleNavItemClick(navItem) {
    setCurrentActive(navItem.text);
    if (navItem.path) {
      navigate(navItem.path);
    }
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
                src={ profilePicture }
                alt="User profile picture"
              />
            </div>
            <div className="sidebar-profile-user">
              <p className="full-name"> 
                { fullname }
              </p>
              <p className="username">
                { username }
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