	import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import SearchBar from 'material-ui-search-bar';

import AttendanceBox from '../attendance/attendance';
import CollectionWidget from '../collectionWidget/collectionWidget';
import CashDetails from '../cashDetails/cashDetails';
import userService from '../../service/user.service';
  // function createData(name, noOfCustomers, collected, dpd, rescheduled, target, pending, givenAtBranch) {
  //   return { name, noOfCustomers, collected, dpd, rescheduled, target, pending, givenAtBranch };
  // }

// const originalRows = [
//   createData('Walter White', 420, 0, 6090, 0, 'NA', 'NA', 0),
//   createData('Willy Wonka', 420, 0, 6090, 0, 'NA', 'NA', 0),
//   createData('Chinrasu', 420, 0, 6090, 0, 'NA', 'NA', 0),
//   createData('PABLO ESCOBAR', 420, 0, 6090, 0, 'NA', 'NA', 0),
//   createData('KIM JONG UN', 420, 0, 6090, 0, 'NA', 'NA', 0),
//   createData('UnGoppan', 420, 0, 6090, 0, 'NA', 'NA', 0),
//   createData('Michael Rayappan', 420, 0, 6090, 0, 'NA', 'NA', 0),
//   createData('Lalgudi Karuppiah Gandhi', 420, 0, 6090, 0, 'NA', 'NA', 0),
//   createData('GigaCHAD', 420, 0, 6090, 0, 'NA', 'NA', 0),
//   createData('Shaquile O Neal', 420, 0, 6090, 0, 'NA', 'NA', 0),
// ];

export default function BasicTable() {
  const [value, setValue] = React.useState();
  // console.log({rowValue})
  const history = useHistory();

  const groupPage = () => {
    history.push('/groupDetails');
  };

  const getRowData = item => {
    window.localStorage.setItem("foId",item.foId) 
  }

  const handleOnRowClick = item => {
    groupPage();
    getRowData(item);

  }

  const [searched, setSearched] = useState('');
  // const [rows, setRows] = useState(originalRows);

  // const requestSearch = (searchedVal) => {
  //   const filteredRows = originalRows.filter((data) => {
  //     return data.foName.toLowerCase().includes(searchedVal.toLowerCase());
  //   });
  //   // setRows(filteredRows);
  // };

  const cancelSearch = () => {
    setSearched('');
    // requestSearch(searched);
  };



  const [data, setData] = useState([]);
  const getTeamTable = () => {
    userService.getTeamTable()
    .then(res => {
      setData(res.data.data)
    }).catch(err=>{
      console.log(err)
    })
  }

  useEffect(() => getTeamTable(),[])

  return (
    <Grid container spacing={3}>
      <Grid item xs={2}>
        <div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              fixedHeight
              label="Today"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </div>
        <br />
        <div>
          <AttendanceBox />
        </div>
        <br />
        <div>
          <CollectionWidget />
        </div>
        <br />
        <div>
          <CashDetails />
        </div>
      </Grid>
      <Grid item xs={10}>
        <Paper>
          <SearchBar
            value={searched}
            // onChange={(searchVal) => requestSearch(searchVal)}
            onCancelSearch={() => cancelSearch()}
          />
          <TableContainer component={Paper}>
            <Table sx={{ minwidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>NAME</TableCell>
                  <TableCell align="center"># OF CUSTOMERS</TableCell>
                  <TableCell align="center">COLLECTED</TableCell>
                  <TableCell align="center">DPD</TableCell>
                  <TableCell align="center">RESCHEDULED</TableCell>
                  <TableCell align="center">TARGET</TableCell>
                  <TableCell align="center">PENDING</TableCell>
                  <TableCell align="center">GIVEN AT BRANCH</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((list) => (
                  <TableRow
                    onClick={() => handleOnRowClick(list)}
                    hover={true}
                    key = {list.foName} // key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      <b>{list.foName}</b>
                    </TableCell>
                    <TableCell align="center">{list.customers}</TableCell>
                    <TableCell align="center">{list.collected}</TableCell>
                    <TableCell align="center">{list.DPD}</TableCell>
                    <TableCell align="center">{list.Reschedule}</TableCell>
                    <TableCell align="center">NA</TableCell>
                    <TableCell align="center">NA</TableCell>
                    <TableCell align="center">{list.GivenAtBranch}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Grid>
    </Grid>
  );
}