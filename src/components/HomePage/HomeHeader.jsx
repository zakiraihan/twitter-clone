import "./HomeHeader.css";

function HomeHeader(props) {
  
  const activeTabStyle = {
    fontWeight: "bold",
    color: "white",
    paddingBottom: "2px"
  }

  const notActiveTabStyle = {
    fontWeight: "400",
    paddingBottom: "20px"
  }

  
  return (
    <div className="home-header">
      <div className="home-header-top">
        Home
      </div>
      <div className="home-header-bottom">
        <div onClick={() => props.onClickTab(0)}>
          <div 
            className="home-header-bottom-text" 
            style={!props.activeTab ? activeTabStyle : notActiveTabStyle}
          >
            For you
            { !props.activeTab && <div className="home-header-bottom-text-border"/> }
          </div>
        </div>
        <div onClick={() => props.onClickTab(1)}>
          <div 
            className="home-header-bottom-text" 
            style={props.activeTab ? activeTabStyle : notActiveTabStyle}
          >
            Following
            { props.activeTab !== 0 && <div className="home-header-bottom-text-border"/> }
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeHeader