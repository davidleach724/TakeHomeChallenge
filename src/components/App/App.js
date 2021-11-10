import { useEffect, useState } from 'react';
import { fetchData } from '../../apiCalls';
import Stories from '../Stories/Stories';

import './App.css'

const App = () => {
  const [currentStories, setCurrentStories] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchData()
    .then(data => setCurrentStories(data.results))
    .catch(error => setError(error))
  }, [])

  return (
    <main>
      <h1 className='main-title'>I Read the News Today, Oh Boy</h1>
      {currentStories !== null && <Stories currentStories={ currentStories }/>}
    </main>
  )
}

export default App;