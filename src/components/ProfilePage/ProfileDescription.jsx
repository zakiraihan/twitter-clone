import "./ProfileDescription.css";

import { closeModal, showModal } from "../../slices/modalSlice";
import { useDispatch, useSelector } from "react-redux";

import { getUser } from "../../slices/userSlice";

function ProfileDescription(props) {
  const dispatch = useDispatch();
  const {
    fullname,
    username,
    photo,
    headerPhoto,
    bio
  } = useSelector(getUser);

  function onClickHeaderPhoto() {
    dispatch(showModal({
      type: "ProfileHeaderPhoto",
      props: {
        headerPhoto
      }
    }))
  }

  function onClickPhoto() {
    dispatch(showModal({
      type: "ProfilePhoto",
      props: {
        photo
      }
    }))
  }

  return (
    <div className="profile-description-container">
      <div className="profile-header-photo">
        <img 
          src={ headerPhoto } 
          alt="User Header Photo"
          onClick={onClickHeaderPhoto}
        />
      </div>
      <div className="profile-description-detail">
        <div className="profile-photo">
          <img 
            src={ photo } 
            alt="user profile photo"
            onClick={onClickPhoto}
          />
          <div className="profile-photo-hover-handler">
          </div>
        </div>
        <div className="profile-edit-button">
          Edit profile
        </div>
        <div className="profile-description-fullname">
          { fullname }
        </div>
        <div className="profile-description-username">
          { username }
        </div>
        <div className="profile-description-bio">
          { bio }
        </div>
      </div>
    </div>
  )
}

export default ProfileDescription