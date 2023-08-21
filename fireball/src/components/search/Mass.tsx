import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';


export default function Mass({mass, setMass}) {
 
  const handleChange = (event: Event, newValue: number | number[]) => {
    setMass(newValue as number[]);
  };

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        value={mass}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={0}
        max={23000000}
      />
    </Box>
  );
}