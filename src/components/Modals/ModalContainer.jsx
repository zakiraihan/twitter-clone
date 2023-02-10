import "./ModalContainer.css";

import React, { useEffect } from 'react'
import { closeModal, getModalState } from "../../slices/modalSlice";
import { useDispatch, useSelector } from "react-redux";

import SidebarMoreOptions from "./SidebarMoreOptions";

function ModalContainer(props) {
  const dispatch = useDispatch();

  const modalState = useSelector(getModalState);

  const defaultCardContainerPosition = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }

  function onClickArea(event) {
    event.preventDefault();
    if(event.target === event.currentTarget) {
      dispatch(closeModal());
    }
  }

  function ModalSelector() {
    switch(modalState.type){
      case "SidebarMoreOption":
        return <SidebarMoreOptions />
    }
  }
  
  return (
    <div 
      className="modal-container" style={{ 
        display: modalState.type === "none" ? "none" : "block" 
      }}
      onClick={onClickArea}
    >
      <div className="modal-card-container" style={modalState.location || defaultCardContainerPosition}>
        <ModalSelector />
      </div>
    </div>
  )
}

export default ModalContainer