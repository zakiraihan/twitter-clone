import "./ProfileHeader.css";

import { ArrowLeft } from "../../assets/icons/common";

function ProfileHeader(props) {

  return (
    <div className="profile-header-container">
      <div className="profile-header-arrow">
        <img src={ ArrowLeft } alt="Back Arrow"/>
      </div>
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