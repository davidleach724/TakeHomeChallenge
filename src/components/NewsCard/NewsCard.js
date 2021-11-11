import { useState } from 'react'
import CardDetails from '../CardDetails/CardDetails'
import './NewsCard.css'

const NewsCard = ({ story }) => {
  const [hoverStatus, setHoverStatus] = useState(false)

  return (
    <>
    <div className="news-card"  
      onMouseEnter={() => setHoverStatus(true)}
      onMouseLeave={() => setHoverStatus(false)}
      onClick={() => window.open(story.url)}
      >
      <img className='thumbnail' src={ story.multimedia[0].url } />
    </div>
    {hoverStatus && <CardDetails story={ story }/>}
    </>
  )
}

export default NewsCard