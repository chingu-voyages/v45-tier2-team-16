// import * as React from 'react';
import { DataGrid, GridCell, GridColDef, GridSkeletonCell } from '@mui/x-data-grid';
import { Meteorite, row, rowTypes } from '../interfaces';
import { useCallback, useEffect, useState } from 'react';
// console.log(meteoriteData.slice(0,10))

interface Props {
  data: Meteorite[]
}

const columns: GridColDef[] = [
  { field: 'name', headerName: 'Name', minWidth: 100, flex: 1}, 
  { field: 'year', headerName: 'Year', minWidth: 150, flex: 1},
  { field: 'mass', headerName: 'Mass', minWidth: 100, flex: 1},
  { field: 'reclong', headerName: 'Longitude', minWidth: 150, flex: 1},
  { field: 'reclat', headerName: 'Latitude', minWidth: 150, flex: 1}, 
  { field: 'country', headerName: 'Country', minWidth: 150, flex: 1},
];


const Table = ({data}: Props) => {

  const [loading, setLoading] = useState(true);
  const [rows, setRows] = useState<rowTypes[]>([]) 

  const getCountryName = async (lat: string, long: string) => {
    const reverse = await fetch(`https://api.radar.io/v1/geocode/reverse?coordinates=${lat},${long}`, {
      method: 'GET', 
      headers: {
        "Authorization": "prj_test_pk_6fc2d214cd3c695938a5710decec25a2d23f5674"
      },
      cache: 'force-cache'
    }).then(async data => {
      const res = await data.json();
      return res?.addresses?.pop()?.country
    }).catch(err => console.log(err)); 
    return reverse
  } 

  useEffect(() => {
    setLoading(true); 
    async function getData() {
      const promises = data.map(async(col) => { 
        const country = await getCountryName(col.reclat, col.reclong); 
        return {
          id: col.id,
          name: col.name,
          year: col.year ? new Date(col.year).toDateString().slice(4) : '',
          mass: col.mass ? col.mass : '',
          reclat: col.reclat,
          reclong: col.reclong,
          fall: col.fall,
          recclass: col.recclass,
          country: country,
        };
      })
      
      const resolvedData = await Promise.all(promises);

      setRows(resolvedData)
      setLoading(false);
    }
 
    getData()

  }, [data])
   

  return (
    <div style={{ height: 300, width: '100%' }}>
       
      <DataGrid   
        rows={rows}   
        loading={loading}
        // autoPageSize 
        columns={columns}  
        pagination={true}
        initialState={{
          pagination: {
            paginationModel: {page: 0, pageSize: 10}
          }
        }} 
        // maximum page size is 100 // delete this line if you want
        pageSizeOptions={[10, 25, 50, 100]}
      /> 
    </div>
  );
}
 
export default Table;
