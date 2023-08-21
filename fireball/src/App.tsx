import { useEffect, useState } from "react"
import SearchForm from "./components/search form/SearchForm"

import strikeData from './data.json'
import Search from "./components/search/Search"

  

function App() { 

  const [data, setData] = useState(strikeData)
  console.log(data)


  return (
    <> 
      {/* <SearchForm data={data} setData={setData} /> */}
      <Search data={data} setData={setData} />
    </>
  )
}

export default App
