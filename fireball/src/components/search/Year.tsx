import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

interface Props {
  year: string | null,
  setYear:React.Dispatch<React.SetStateAction<string|null>>,
  data: Meteorite[],
  
}

export default function Name({year, setYear, data}: Props) {

  const [inputValue, setInputValue] = React.useState('');

  const yearArr = data.map(meteorite => meteorite.year ? meteorite.year.split('-')[0] : '')
                    .filter(meteorite => meteorite)

  const options = [...new Set(yearArr)].sort((a,b) => parseFloat(a)-parseFloat(b))

  return (
    <div>
   
      <Autocomplete
        isOptionEqualToValue={(option, value) => option.year === value.year}
        value={year}
        onChange={(_event: any, newValue: string | null) => {
          setYear(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(_event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        options={options}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Year" />}
      />
    </div>
  );
}