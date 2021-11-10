import './NewsCard.css'

const NewsCard = ({ image }) => {

  return (
    <div className="news-card" onClick={(() => {console.log(image)})}>
      <img className='thumbnail' src={ image } />
    </div>
  )
}

export default NewsCard