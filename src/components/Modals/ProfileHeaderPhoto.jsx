import "./ProfileHeaderPhoto.css";

import CloseButton from "../CloseButton";

function ProfileHeaderPhoto({ headerPhoto, closeModalMethod }) {
  return (
    <div className="modal-profile-header-photo-container" onClick={closeModalMethod}>
      <CloseButton onClick={closeModalMethod}/>
      <div className="modal-profile-header-photo" onClick={(event) => event.stopPropagation()}>
        <img src={ headerPhoto } alt="user header photo"/>
      </div>
    </div>
  )
}

export default ProfileHeaderPhoto