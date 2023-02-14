import "./Profile.css";

import { ProfileDescription, ProfileHeader } from "../components/ProfilePage";

import { TrendingSection } from "../components";
import { useState } from "react";

const tabTypes = {
  tweets: "Tweets",
  tweetAndReplies: "Tweets & replies",
  media: "Media",
  likes: "Likes"
}

function Profile(props) {
  const [selectedTab, setSelectedTab] = useState(tabTypes.tweets);
  const [tabDataCounts, setTabDataCounts] = useState({
    [tabTypes.tweets]: 10,
    [tabTypes.tweetAndReplies]: 15,
    [tabTypes.media]: 0,
    [tabTypes.likes]: 2
  })

  return (
    <div className="page-container">
      <section className="page-left-container">
        <ProfileHeader 
          dataCount={tabDataCounts[selectedTab]}
          selectedTab={selectedTab}
        />
        <ProfileDescription />
      </section>

      <TrendingSection showTrending={true} />
    </div>
  )
}

export default Profile