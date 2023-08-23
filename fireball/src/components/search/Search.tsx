import React from 'react'
import Name from './Name'
import Year from './Year';
import Composition from './Composition';
import Mass from './Mass';
import meteoriteData from '../../data.json'

interface Props {
    data: Meteorite[],
    setData: React.Dispatch<React.SetStateAction<Meteorite[]>>
}

const Search = ({data, setData} : Props) => {
 
    const [name, setName] = React.useState<string | null>(null);

    const [year, setYear] = React.useState<string | null>(null);

    const [composition, setComposition] = React.useState<string | null>(null);

    const [mass, setMass] = React.useState<number[]>([0, 200]);

    const handleClick = () => {
        setData(meteoriteData as Meteorite[])
        setName(null)
        setYear(null)
        setComposition(null)
        setMass([0, 0])
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const filteredData = data.filter(meteorite => meteorite.name === name || meteorite.recclass === composition || meteorite.year?.split('-')[0] === year ||  (meteorite.mass > mass[0].toString() && meteorite.mass < mass[1].toString()))
        setData(filteredData)
    }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-3 m-5'>
       <Name name={name} setName={setName} data={data}/>

       <Year year={year} setYear={setYear} data={data}/>

       <Composition composition={composition} setComposition={setComposition} data={data}/>

        <label>Mass Range</label>
        <Mass mass={mass} setMass={setMass}/>

        <div className='flex gap-5'>
            <button type='button' onClick={handleClick}>Clear</button>
            <button type='submit'>Search</button> 
        </div>
        
    </form >
  )
}

export default Search