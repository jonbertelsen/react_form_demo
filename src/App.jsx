import './App.css'
import DemoList from './DemoList'
import MyForm from './MyForm'
import { useState, useEffect } from 'react'

function App() {
  const [demoData, setDemoData] = useState([])

  function readData() {
    fetch('http://localhost:3000/info', {
      method: 'GET',
      headers: { Accept: 'application/json' },
    })
      .then((response) => response.json()) // parse the JSON from the response
      .then((data) => setDemoData(data)) // work with the data
      .catch((error) => console.error('Error:', error)) // handle any errors
  }

  useEffect(() => {
    readData()
  }, [])

  return (
    <>
      <h1 className='heading'>Un-Controlled Component Demo</h1>
      <MyForm readData={readData} />
      <DemoList demoData={demoData} />
    </>
  )
}

export default App
