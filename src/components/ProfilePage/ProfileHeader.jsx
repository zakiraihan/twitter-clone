import "./ProfileHeader.css";

import BackButton from "../BackButton";

function ProfileHeader(props) {
  
  return (
    <div className="profile-header-container">
      <BackButton />
      <div className="profile-header-details">
        <p className="profile-header-name">
          Zaki Raihan
        </p>
        <p className="profile-header-tab-desc">
          {props.dataCount} {props.activeTab}
        </p>
      </div>
    </div>
  )
}

export default ProfileHeader