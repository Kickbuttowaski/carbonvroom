import React,{useState} from 'react';
import './App.scss';
import { DataTable,Pagination } from 'carbon-components-react';
import SideNavigation from './sideNav';

import { Button } from 'carbon-components-react';
import {Download24} from '@carbon/icons-react';
import {Edit24} from '@carbon/icons-react';
import {Settings24} from '@carbon/icons-react';

function App() {
  const [pageSizeee,setpageSize]=useState(2)
  const {
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableBody,
    TableCell,
    TableHeader,
    TableToolbarSearch,
    TableToolbar,
  } = DataTable;
  const rows = [
    {
      id: 'a',
      foo: 'Foo a',
      bar: 'Bar a',
      baz: 'Baz a',
    },
    {
      id: 'b',
      foo: 'Foo b',
      bar: 'Bar b',
      baz: 'Baz b',
    },
    {
      id: 'c',
      foo: 'Foo c',
      bar: 'Bar c',
      baz: 'Yaz c',
    },
    {
      id: 'd',
      foo: 'Foo c',
      bar: 'Bar c',
      baz: 'Yaz c',
    },
    {
      id: 'd',
      foo: 'Foo c',
      bar: 'Bar c',
      baz: 'Yaz c',
    }
  ];
  const rowsizeCalc =(size)=>{
    var temp_rows
    for(let i=0;i<size;i++){
      temp_rows[i]=rows[i]
    }
    console.log(temp_rows)
    return rows;
  }
  const handleChange=(e)=>{
    setpageSize(e.pageSize)
    console.log(e.pageSize)
  }
  const batchActionClick =(data)=>{
    console.log("data")
  }
  // We would have a headers array like the following
  const headers = [
    {
      key: 'foo',
      header: 'Foo',
      
    },
    {
      key: 'bar',
      header: 'Bar'
    },
    {
      key: 'baz',
      header: 'Baz'
    },
  ];
  return (
    <div className="App">
  <div class="bx--grid">
  <div class="bx--row">
    <div class="bx--col-lg-2 bx--col-md-12"> <SideNavigation/></div>
    <div class="bx--col-lg-10 bx--col-md-12"> 
      
     
   <DataTable
      isSortable={true}
      rows={rows.slice(1,pageSizeee)}
      headers={headers}
      render={({ rows, headers, getHeaderProps,getSelectionProps,onInputChange,getBatchActionProps, selectedRows }) => (
        <TableContainer title="DataTable">
       <TableToolbar>
                <TableToolbarSearch onChange={onInputChange} />
      </TableToolbar>
          <Table>
            <TableHead>
              <TableRow>
                {headers.map(header => {
                              //console.log({header})
                              return <TableHeader {...getHeaderProps( {header })}>
                    {header.header}
                  </TableHeader>
      })}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.id}>
                  {row.cells.map(cell => {
                  // console.log(row)
                   return <TableCell key={cell.id}>{cell.value}</TableCell>
                  }
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    />
    <Pagination
    backwardText="Previous page"
    disabled={false}
    forwardText="Next page"
    isLastPage={false}
    itemRangeText={function noRefCheck(){}}
    itemText={function noRefCheck(){}}
    itemsPerPageText="Items per page:"
    onChange={(e)=>{handleChange(e)}}
    page={1}
    pageInputDisabled={false}
    pageNumberText="Page Number"
    pageRangeText={function noRefCheck(){}}
    pageSize={10}
    pageSizes={[
      2,
      3,
      4
    ]}
    pageText={function noRefCheck(){}}
    pagesUnknown={false}
    totalItems={103}
  />
  </div>
  </div>
</div>
    </div>
  );
}

export default App;
