import "./ProfileHeader.css";

import { ArrowLeft } from "../../assets/icons/common";
import { useNavigate } from "react-router-dom";

function ProfileHeader(props) {
  const navigate = useNavigate();

  function onClickArrow() {
    navigate(-1);
  }
  return (
    <div className="profile-header-container">
      <div className="profile-header-arrow" onClick={onClickArrow}>
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