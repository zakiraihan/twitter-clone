import "./TrendingSection.css";

import { SearchIcon, ThreeDotsIcon } from "../../assets/icons/common";
import { useEffect, useRef } from "react";

import TrendingItem from "./TrendingItem";
import { trending } from "../../mockData/trending";

export default function TrendingSection(props) {
  const containerRef = useRef(null);

  const handleScroll = () => {
    const position = window.scrollY;
    containerRef.current.scrollTop = position;
  };
  
  useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  return (
    <section className="trending-container" ref={containerRef}>
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
      <div className="trending-inside-container">
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
      </div>
    </section>
  )
}