import { useEffect, useState } from 'react';
import { fetchData } from '../../apiCalls';
import Stories from '../Stories/Stories';
import './App.css'

const dayjs = require('dayjs');

const App = () => {
  const [currentStories, setCurrentStories] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchData()
    .then(data => setCurrentStories(data))
    .catch(error => setError(error))
  }, [])


  return (
    <main>
      <div className="header">
        <h1 className='main-title'>I Read the News Today, Oh Boy</h1>
        { currentStories !== null && <h2 className='tagline'>Today's News {dayjs(currentStories.last_updated).format('MMMM DD, YYYY')}</h2>}
      </div>
      {currentStories !== null && <Stories currentStories={ currentStories.results }/>}
      <h3>Copyright (c) 2021 The New York Times Company. All Rights Reserved.</h3>
    </main>
  )
}

export default App;