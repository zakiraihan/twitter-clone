import "./ProfilePhoto.css";

import CloseButton from "../CloseButton";

function ProfilePhoto({ photo, closeModalMethod }) {
  return (
    <div className="modal-profile-photo-container" onClick={closeModalMethod}>
      <CloseButton onClick={closeModalMethod}/>
      <div className="modal-profile-photo" onClick={(event) => event.stopPropagation()}>
        <img src={ photo } alt="user"/>
      </div>
    </div>
  )
}

export default ProfilePhoto