import "./BackButton.css";

import { ArrowLeft } from "../assets/icons/common";
import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();

  function onClickArrow() {
    navigate(-1);
  }
  return (
    <div className="back-arrow" onClick={onClickArrow}>
      <img src={ ArrowLeft } alt="Back Arrow"/>
    </div>
  )
}

export default BackButton