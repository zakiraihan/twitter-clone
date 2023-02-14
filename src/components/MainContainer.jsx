import "./MainContainer.css";

export default function MainContainer(props) {
  return (
    <main className="main-container">
      {props.children}
    </main>
  )
}