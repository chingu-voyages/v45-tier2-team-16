import { useEffect, useState } from "react"
import SearchForm from "./components/search form/SearchForm"

import Search from "./components/search/Search"
import meteoriteData from './data.json'
  

function App() { 

  const [data, setData] = useState<Meteorite[]>(meteoriteData)
  console.log(data)


  return (
    <> 
      <Search data={data} setData={setData} />
    </>
  )
}

export default App
