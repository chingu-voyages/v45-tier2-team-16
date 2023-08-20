import { useEffect, useState } from "react"

  

function App() { 

  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
    const response = await fetch('https://data.nasa.gov/resource/gh4g-9sfh.json')
    const data = await response.json()
    setData(data)
    }

    fetchData()
  }, [])
  

  return (
    <> 
    
    </>
  )
}

export default App
