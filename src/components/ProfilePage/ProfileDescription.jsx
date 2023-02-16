import "./ProfileDescription.css";

import { CalendarIcon, MapMarkerIcon, MicrosoftAzureIcon } from "../../assets/icons/common";
import { closeModal, showModal } from "../../slices/modalSlice";
import { useDispatch, useSelector } from "react-redux";

import Loading from "../Loading";
import { capitalizeFirstLetter } from "../../utils/stringFormattor";
import { getUser } from "../../slices/userSlice";
import { translate } from "../../utils/translator";
import { useEffect } from "react";
import { useState } from "react";

function ProfileDescription(props) {
  const dispatch = useDispatch();
  const [translatedBio, setTranslatedBio] = useState("");
  const [translatedBioFrom, setTranslatedBioFrom] = useState("");
  const [isLoadingTranslateBio, setIsLoadingTranslateBio] = useState(false);
  const [isShowTranslatedBio, setIsShowTranslatedBio] = useState(false);
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

  function translateUserBio() {
    if (translatedBio === "") {
      setIsLoadingTranslateBio(true);
    }
    else {
      setIsShowTranslatedBio(prevState => !prevState);
    }
  }

  useEffect(() => {
    if (isLoadingTranslateBio && !translatedBio) {
      translate(bio).then(res => {
        if(res.isError) {
          alert(`Sorry currently the translation feature is down.`);
          setIsLoadingTranslateBio(false);
        }
        else {
          setTranslatedBioFrom(res.translatedFrom);
          setTranslatedBio(capitalizeFirstLetter(res.translatedText));
        }
      })
    }
  }, [isLoadingTranslateBio])

  useEffect(() => {
    if (translatedBio && isLoadingTranslateBio) {
      setIsLoadingTranslateBio(false);
      setIsShowTranslatedBio(true);
    }
  }, [translatedBio])

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
        {!isShowTranslatedBio ?
          <div 
            className="profile-description-translate"
            onClick={translateUserBio}
            style={{ marginBottom: "15px" }}
          >
            Translate bio
          </div>
          :
          <div 
            className="profile-description-translate"
            onClick={translateUserBio}
          >
            <p>Translated {translatedBioFrom && `from ${translatedBioFrom}`} by </p>
            <img src={ MicrosoftAzureIcon } alt="Azure Icon"/>
          </div>
        }
        {isLoadingTranslateBio &&
          <div className="profile-description-loading">
            { <Loading size={40}/>}
          </div>
        }
        {isShowTranslatedBio &&
          <div className="profile-description-bio" style={{ marginBottom: "10px" }}>
            { translatedBio }
          </div>
        }
        <div className="profile-location-date-container">
          <div className="profile-location">
            <img src={ MapMarkerIcon } alt="Map marker"/>
            Lampung
          </div>
          <div className="profile-date">
            <img src={ CalendarIcon } alt="calendar"/>
            Joined July 2013
          </div>
        </div>

        <div className="profile-follow-statistic">
          <div>
            <p class="profile-follow-statistic-count">97</p>
            <p class="profile-follow-statistic-title">Following</p>
          </div>
          <div>
            <p class="profile-follow-statistic-count">49</p>
            <p class="profile-follow-statistic-title">Followers</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileDescription