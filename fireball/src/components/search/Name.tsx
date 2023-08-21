import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

interface Props {
  name: string | null,
  setName:React.Dispatch<React.SetStateAction<string|null>>,
  data: Meteorite[],
  
}


export default function Name({name, setName, data}: Props) {

  const [inputValue, setInputValue] = React.useState('');

  const options = data.map((meteorite: Meteorite) => meteorite.name)

  return (
    <div>
   
      <Autocomplete
      isOptionEqualToValue={(option, value) => option.name === value.name}
        value={name}
        onChange={(_event: any, newValue: string | null) => {
          setName(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(_event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        options={options}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Name" />}
      />
    </div>
  );
}