import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


export default function Name({year, setYear, data}) {

  const [inputValue, setInputValue] = React.useState('');

  const yearArr = data.map(meteorite => meteorite.year ? meteorite.year.split('-')[0] : '')
                    .filter(meteorite => meteorite)

  const options = [...new Set(yearArr)].sort((a,b) => a-b)

  return (
    <div>
   
      <Autocomplete
        isOptionEqualToValue={(option, value) => option.year === value.year}
        value={year}
        onChange={(event: any, newValue: string | null) => {
          setYear(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        options={options}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Year" />}
      />
    </div>
  );
}