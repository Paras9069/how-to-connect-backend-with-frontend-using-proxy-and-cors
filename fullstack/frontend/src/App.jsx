import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => {
        setJokes(response.data)
      })
      .catch((error) => {
        console.error('Error fetching jokes:', error)
      })
  }, []) // <- Important: empty dependency array to run once on mount

  return (
    <>
      <h1>PARAS SHARMA</h1>
      <p>JOKES: {jokes.length}</p>

      {jokes.map((joke, index) => (
        <div key={joke.id || index}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))}
    </>
  )
}

export default App
