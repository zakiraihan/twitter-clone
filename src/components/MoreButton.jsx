import "./MoreButton.css";

import { ThreeDotsIcon } from "../assets/icons/common";

function MoreButton(props) {
  return (
    <div className="more-button-three-dots" style={props.style} onClick={props.onClick}>
      <ThreeDotsIcon className="more-button-three-dots-img"/>
      <div className="more-button-more">
        More
      </div>
    </div>
  )
}

export default MoreButton