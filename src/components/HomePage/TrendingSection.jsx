import "./TrendingSection.css";

import { SearchIcon, ThreeDotsIcon } from "../../assets/icons/common";

import TrendingItem from "./TrendingItem";
import { trending } from "../../mockData/trending";

export default function TrendingSection(props) {
  return (
    <section className="trending-container">
      {props.showTrending &&
        <>
          <div className="trending-searchbar-container">
            <div className="trending-searchbar">
              <img
                src={SearchIcon}
              />
              <input
                placeholder="Search Twitter"
              />
            </div>
          </div>
          <div className="trending-item-list">
            <div className="trending-header">
              Trends for you
            </div>
            {trending.map((item, index) => (
              <TrendingItem 
                key={index}
                item={item}
              />
            ))}
            <div className="trending-item-footer">
              Show more
            </div>
          </div>
        </>
      }
      <footer className="trending-footer">
        <div className="trending-footer-row">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Cookie Policy</p>
        </div>
        <div className="trending-footer-row">
          <p>Accessibility</p>
          <p>Ads info</p>
          <p>More </p> 
          <div className="trending-item-three-dots">
            <img src={ThreeDotsIcon}/>
          </div>
        </div>
        <div className="trending-footer-row">
          <p>© 2023 Twitter, Inc.</p>
        </div>
      </footer>
    </section>
  )
}