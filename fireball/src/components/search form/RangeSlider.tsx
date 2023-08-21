import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value: number) {
  return `${value}°C`;
}

export default function RangeSlider({value, handleRangeChange}) {
 

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleRangeChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        min={10}
  max={800}
      />
    </Box>
  );
}