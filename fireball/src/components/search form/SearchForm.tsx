import React, { useState } from 'react'
import strikeData from '../../data.json'
import RangeSlider from './RangeSlider'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


const SearchForm = ({data, setData}) => {



 
const [form, setForm] = useState({
  name: '',
  year: '',
  composition: '',
  massRange:[]
}) 

const [value, setValue] = React.useState<number[]>([20, 37]);
console.log(value)

const handleRangeChange = (event: Event, newValue: number | number[]) => {
  setValue(newValue as number[]);
};

 const handleChange = (e) => {
  console.log(e.target.value)
  const {name, value} = e.target
  setForm(prev => (
    {
      ...prev,
      [name]:  value
    }
  ))
 }

  const clearForm = () => {
    setData(strikeData)
  }

 

 const handleSubmit = e => {
    e.preventDefault()
    console.log(form)
    const filteredData = data.filter(meteorite => meteorite.name.toLowerCase() === form.name.toLowerCase() 
    || (meteorite.year ? meteorite.year.split('-')[0] : meteorite.year) === form.year 
    || meteorite.recclass.toLowerCase() === form.composition.toLowerCase() || meteorite.mass > value[0] && meteorite.mass < value[1])
   
   
    
// console.log(filteredData)
setData(filteredData)

  }


  return (
    <form onSubmit={handleSubmit} className='flex flex-col'>
      {/* names */}
      <label htmlFor="">name</label>
      <input type="text" 
      placeholder='name'
      value={form.name}
      name='name'
      onChange={handleChange}
      />


      {/* year */}
      <label htmlFor="">year</label>
      <input type="text" 
      placeholder='year'
      value={form.year}
      name='year'
      onChange={handleChange}
      />

      {/* composition */}
      <label htmlFor="">composition</label>
      <input type="text" 
      placeholder='composition'
      value={form.composition}
      name='composition'
      onChange={handleChange}
      />

      {/* mass */}
      <p>mass range</p>
      <RangeSlider value={value} handleRangeChange={handleRangeChange}/>

      

      <button type='button' onClick={clearForm}>clear</button>
      <button type='submit'>Search</button>
    </form>
  )
}



export default SearchForm