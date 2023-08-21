import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

interface Props {
  composition: string | null,
  setComposition:React.Dispatch<React.SetStateAction<string|null>>,
  data: Meteorite[],
}

export default function Name({composition, setComposition, data}: Props) {

  const [inputValue, setInputValue] = React.useState('');

  const compositionArr = data.map(meteorite => meteorite.recclass)
  const options =  [...new Set(compositionArr)].sort()

  return (
    <div>
   
      <Autocomplete
        isOptionEqualToValue={(option, value) => option.composition === value.composition}
        value={composition}
        onChange={(_event: any, newValue: string | null) => {
            setComposition(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(_event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        options={options}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Composition" />}
      />
    </div>
  );
}