import NewsCard from '../NewsCard/NewsCard'
import './Stories.css'

const Stories = ({ currentStories }) => {

  const storyCards = currentStories.map(story => {
    return (
      <NewsCard
        image={story.multimedia[0].url}
      />
    )
  })

  return (
    <div className="stories-container">
      {storyCards}
    </div>
  )
}

export default Stories