import './CardDetails.css'
const dayjs = require('dayjs');


const CardDetails = ({ story }) => {

  return (
    <div className="card-details">
      <h2> {story.title}</h2>
      <h4> { story.byline } </h4>
      <img className="larger-picture" src={ story.multimedia[0].url} />
      <h4> {dayjs(story.published_date).format('MMMM DD, YYYY')}</h4>
    </div>
  )
}

export default CardDetails