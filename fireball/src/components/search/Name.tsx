import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


export default function Name({name, setName, data}) {

  const [inputValue, setInputValue] = React.useState('');

  const options = data.map(meteorite => meteorite.name)

  return (
    <div>
   
      <Autocomplete
      isOptionEqualToValue={(option, value) => option.name === value.name}
        value={name}
        onChange={(event: any, newValue: string | null) => {
          setName(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        options={options}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Name" />}
      />
    </div>
  );
}