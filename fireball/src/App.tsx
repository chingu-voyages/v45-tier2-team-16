
import { useState } from "react"
import Search from "./components/search/Search"
import meteoriteData from './data.json'
import Table from './components/Table'
import { Meteorite } from "./interfaces"

function App() { 

  const [data, setData] = useState(meteoriteData as Meteorite[])
  console.log(data)


  return (
    <>
       

      <Search data={data} setData={setData} />
      <Table data={data} />
    </>
  )
}

export default App
