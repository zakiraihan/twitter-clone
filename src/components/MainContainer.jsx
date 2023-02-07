import "./MainContainer.css";

import { TrendingSection } from "./HomePage";

export default function MainContainer(props) {
  return (
    <main className="main-container">
      {props.children}
      <TrendingSection showTrending={props.showTrending} />
    </main>
  )
}