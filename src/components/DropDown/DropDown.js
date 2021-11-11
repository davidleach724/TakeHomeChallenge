const DropDown = ({ currentStories, handleChange}) => {

  let newsCategories = currentStories.map((story, i) => {
    return (story.section)
  })

  const categories = [...new Set(newsCategories)]
  
  newsCategories = categories.map(section => {
    return (
      <option>{section}</option>
    )
  })

  return(
    <select>
      {newsCategories}
    </select>  
  )

}

export default DropDown