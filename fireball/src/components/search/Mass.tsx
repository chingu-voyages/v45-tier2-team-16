import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

interface Props {
  mass: number[] | null,
  setMass:React.Dispatch<React.SetStateAction<number[]|null>>,
}


export default function Mass({mass, setMass}: Props) {
 
  const handleChange = (_event: Event, newValue: number | number[]) => {
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