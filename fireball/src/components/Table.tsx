// import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

// console.log(meteoriteData.slice(0,10))

interface Props {
  data: Meteorite[]
}

const columns: GridColDef[] = [
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'year', headerName: 'Year', width: 150 },
  { field: 'mass', headerName: 'Mass', width: 150 },
  { field: 'lon', headerName: 'Longitude', width: 150 },
  { field: 'lat', headerName: 'Latitude', width: 150 },
];


const Table = ({data}: Props) => {

  const rows: Meteorite[] = []

  data.forEach(col => {
    rows.push({
      id: col.id,
      name: col.name,
      year: col.year ? parseInt(col.year) : undefined,
      mass: col.mass ? parseInt(col.mass) : undefined,
      lon: col.geolocation?.longitude ? parseInt(col.geolocation.longitude) : undefined,
      lat: col.geolocation?.latitude ? parseInt(col.geolocation.latitude) : undefined
    })
  })

  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}

interface Meteorite { 
  id: string;
  name: string;
  year: number | undefined;
  mass: number | undefined;
  lon?: number;
  lat?: number;
}

export default Table;
