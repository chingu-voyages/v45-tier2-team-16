
import { useState } from "react"
import Search from "./components/search/Search"
import meteoriteData from './data.json'
  

function App() { 

  const [data, setData] = useState(meteoriteData as Meteorite[])
  console.log(data)


  return (
    <> 
      <Search data={data} setData={setData} />
    </>
  )
}

export default App
