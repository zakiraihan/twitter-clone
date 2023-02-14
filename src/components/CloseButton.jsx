import "./CloseButton.css";

import { CloseIcon } from "../assets/icons/common";

function CloseButton(props) {
  return (
    <div className="close-button" onClick={props.onClick}>
      <img src={ CloseIcon } alt="Close button"/>
      <div className="close-text">
        Close
      </div>
    </div>
  )
}

export default CloseButton