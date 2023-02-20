import "./Profile.css";

import { ProfileDescription, ProfileHeader, ProfileTabs } from "../components/ProfilePage";

import { TrendingSection } from "../components";
import { useCallback } from "react";
import { useState } from "react";

export const tabTypes = {
  tweets: "Tweets",
  tweetAndReplies: "Tweets & replies",
  media: "Media",
  likes: "Likes"
}

function ProfilePage(props) {
  const [activeTab, setActiveTab] = useState(tabTypes.tweets);
  const [tabDataCounts, setTabDataCounts] = useState({
    [tabTypes.tweets]: 0,
    [tabTypes.tweetAndReplies]: 0,
    [tabTypes.media]: 0,
    [tabTypes.likes]: 0
  })

  function changeActiveTabs(tabTypeKey) {
    setActiveTab(tabTypes[tabTypeKey]);
  }

  const onUpdateTabDataCounts = useCallback((tabTypeKey, count) => {
    setTabDataCounts(prevState => (
      {
        ...prevState,
        [tabTypeKey]: count
      }
    ))
  }, [])

  return (
    <div className="page-container">
      <section className="page-left-container">
        <ProfileHeader 
          dataCount={tabDataCounts[activeTab]}
          activeTab={activeTab}
        />
        <ProfileDescription />
        <ProfileTabs 
          tabTypes={tabTypes}
          currentActiveTab={activeTab}
          onChangeTab={changeActiveTabs}
          onUpdateTabDataCounts={onUpdateTabDataCounts}
        />
      </section>

      <TrendingSection showTrending={true} />
    </div>
  )
}

export default ProfilePage