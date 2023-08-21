import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


export default function Name({composition, setComposition, data}) {

  console.log(composition)
  const [inputValue, setInputValue] = React.useState('');

  const compositionArr = data.map(meteorite => meteorite.recclass)
  const options =  [...new Set(compositionArr)].sort()

  return (
    <div>
   
      <Autocomplete
        isOptionEqualToValue={(option, value) => option.composition === value.composition}
        value={composition}
        onChange={(event: any, newValue: string | null) => {
            setComposition(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        options={options}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Composition" />}
      />
    </div>
  );
}