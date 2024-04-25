import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [data, setDate] = useState([])
  const [count, setCount] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}posts`)

        if (!res.ok) {
          throw new Error('Failed to fetch data')
        }

        const result = await res.json()
        setDate(result)
      } catch (err) {
        console.error(err)
      }
    }

    fetchData()
  }, [])

  return (
    <>
      <div className='App'>
        <h1>Hello Vite + React + Django</h1>
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
        <button type='button' onClick={() => setCount((count) => count + 1)}>
          count is:{count}
        </button>
      </div>
    </>
  )
}

export default App
