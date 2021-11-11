import './CardDetails.css'

const CardDetails = ({ story }) => {
  console.log(story)

  return (
    <div className="card-details">
      <h2> {story.title}</h2>
      <img className="larger-picture" src={ story.multimedia[0].url} />
    </div>
  )
}

export default CardDetails