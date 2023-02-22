const mapMonths = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
]

const TimeAgo = ({ timestamp }) => {
    let timeAgo = '';
    if (timestamp) {
      const currentDate = new Date();
      const date = new Date(timestamp);
      if (currentDate.getFullYear() - date.getFullYear() > 0) {
        timeAgo = `${mapMonths[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
      }
      else if (currentDate.getMonth() - date.getMonth() > 0) {
        timeAgo = `${mapMonths[date.getMonth()]} ${date.getDate()}`;
      }
      else if (
        currentDate.getDate() === date.getDate()
      ) {
        if (currentDate.getHours() - date.getHours() > 0) {
          timeAgo = `${currentDate.getHours() - date.getHours()}h`;
        }
        else if (currentDate.getMinutes() - date.getMinutes() > 0) {
          timeAgo = `${currentDate.getMinutes() - date.getMinutes()}m`;
        }
      }
      else {
        timeAgo = `${mapMonths[date.getMonth()]} ${date.getDate()}`;
      }

    }

    return (
      <span title={timestamp}>
        &nbsp;{timeAgo}
      </span>
    );
}
export default TimeAgo