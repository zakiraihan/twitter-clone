import "./ProfileHeader.css";

import BackButton from "../BackButton";
import { useNavigate } from "react-router-dom";

function ProfileHeader(props) {
  
  return (
    <div className="profile-header-container">
      <BackButton />
      <div className="profile-header-details">
        <p className="profile-header-name">
          Zaki Raihan
        </p>
        <p className="profile-header-tab-desc">
          {props.dataCount || "1"} {props.selectedTab}
        </p>
      </div>
    </div>
  )
}

export default ProfileHeader