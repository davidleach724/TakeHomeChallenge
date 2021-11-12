import './CardDetails.css'
const dayjs = require('dayjs');


const CardDetails = ({ story }) => {

  return (
    <div className="card-details">
      <h2 className='story-title'> {story.title}</h2>
      <h4 className='story-author'> { story.byline } </h4>
      <img className="larger-picture" src={ story.multimedia[0].url} />
      <h4> {dayjs(story.published_date).format('MMMM DD, YYYY')}</h4>
    </div>
  )
}

export default CardDetails