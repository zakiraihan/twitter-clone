import "./Loading.css";

function Loading({ size = 20, color = "#1D9BF0", backgroundColor = "#71767B" }) {
  const containerStyle = {
    width: `${size}px`, 
    height: `${size}px`, 
  }
  const divStyle = {
    width: `${size * 80 / 100}px`, 
    height: `${size * 80 / 100}px`,
    border: `${size * 10 / 100}px solid ${color}`,
    borderColor: `${color} ${backgroundColor} ${backgroundColor} ${backgroundColor}` 
  }
  return (
    <div className="common-blue-loading" style={ containerStyle }>
      <div style={ divStyle }></div>
      <div style={ divStyle }></div>
      <div style={ divStyle }></div>
      <div style={ divStyle }></div>
    </div>
  )
}

export default Loading