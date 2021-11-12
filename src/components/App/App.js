import { useEffect, useState } from 'react';
import { fetchData } from '../../apiCalls';
import DropDown from '../DropDown/DropDown';
import Stories from '../Stories/Stories';
import './App.css'

const dayjs = require('dayjs');

const App = () => {
  const [currentStories, setCurrentStories] = useState(null)
  let [selectedStories, setSelectedStories] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchData()
    .then(data => setCurrentStories(data))
    .catch(error => setError(error))
  }, [])

  const handleChange = (selectedSection) => {
    setSelectedStories(currentStories.results.filter(story =>
      story.section === selectedSection
    ))
  }

  return (
    <main>
      <div className="header">
        <h1 className='main-title'>I Read the News Today, Oh Boy</h1>
        { currentStories !== null && <h2 className='tagline'>Today's News {dayjs(currentStories.last_updated).format('MMMM DD, YYYY')}</h2>}
        <div className='dropdown'>
          {currentStories !== null &&
          <DropDown currentStories={ currentStories.results } handleChange={ handleChange }/>}
          <button onClick={() => setSelectedStories(null)}>Show all sections</button>
        </div>
      </div>
      {currentStories !== null && selectedStories === null && <Stories currentStories={ currentStories.results }/>}
      {selectedStories !== null && <Stories currentStories={ selectedStories }/>}
      <div className='footer'>
        <h3>Copyright (c) 2021 The New York Times Company. All Rights Reserved.</h3>
      </div>
    </main>
  )
}

export default App;