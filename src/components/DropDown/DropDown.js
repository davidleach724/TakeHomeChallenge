const DropDown = ({ currentStories, handleChange}) => {

  let newsCategories = currentStories.map((story) => {
    return (story.section)
  })

  const categories = [...new Set(newsCategories)]
  
  newsCategories = categories.map(section => {
    return (
      <option value={section}>{section}</option>
    )
  })

  return(
    <select onChange={e => handleChange(e.target.value)}>
      {newsCategories}
    </select>  
  )

}

export default DropDown