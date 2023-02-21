import "./ModalContainer.css";

import { closeModal, getModalState } from "../../slices/modalSlice";
import { useDispatch, useSelector } from "react-redux";

import ProfileHeaderPhoto from "./ProfileHeaderPhoto";
import ProfilePhoto from "./ProfilePhoto";
import SidebarMoreOptions from "./SidebarMoreOptions";
import { modalEnum } from "../../enum/modalEnum";

function ModalContainer(props) {
  const dispatch = useDispatch();

  const modalState = useSelector(getModalState);

  function onClickArea(event) {
    event.preventDefault();
    if(event.target === event.currentTarget) {
      dispatch(closeModal());
    }
  }

  function closeModalMethod(event) {
    event.preventDefault();
    event.stopPropagation();
    dispatch(closeModal());
  }

  function ModalSelector() {
    switch(modalState.type){
      case modalEnum.sidebarMoreOption:
        return (
          <SidebarMoreOptions 
            style={modalState.style}
            closeModalMethod={closeModalMethod}
            {...modalState.props} 
          />
        );
      case modalEnum.profileHeaderPhoto:
        return (
          <ProfileHeaderPhoto 
            style={modalState.style}
            closeModalMethod={closeModalMethod}
            {...modalState.props} 
          />
        );
      case modalEnum.profilePhoto:
        return (
          <ProfilePhoto 
            style={modalState.style}
            closeModalMethod={closeModalMethod}
            {...modalState.props} 
          />
        );
      default:
        return;
    }
  }
  
  return (
    <div 
      className="modal-container" style={{ 
        display: modalState.type === "none" ? "none" : "block" 
      }}
      onClick={onClickArea}
    >
      <ModalSelector />
    </div>
  )
}

export default ModalContainer