import { useEffect, useState } from 'react'
import CardDetails from '../CardDetails/CardDetails'
import './NewsCard.css'

const NewsCard = ({ story }) => {
  const [selectedArticle, setSelectedArticle] = useState(null)
  const [hoverStatus, setHoverStatus] = useState(false)

  // useEffect(() => {
  //   console.log(story)
  // }, [hoverstatus])

  return (
    <>
    <div className="news-card"  
      onMouseEnter={() => setHoverStatus(true)}
      onMouseLeave={() => setHoverStatus(false)}
      >
      <img className='thumbnail' src={ story.multimedia[0].url } />
    </div>
    {hoverStatus && <CardDetails story={ story }/>}
    </>
  )
}

export default NewsCard