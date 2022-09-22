import * as React from 'react';
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
// import SearchBar from "material-ui-search-bar";

import AttendanceBox from '../attendance/attendance';
import CollectionWidget from '../collectionWidget/collectionWidget';
import CashDetails from '../cashDetails/cashDetails';

function createData(name, noOfCustomers, collected, dpd, rescheduled, target, pending, givenAtBranch) {
  return { name, noOfCustomers, collected, dpd, rescheduled, target, pending, givenAtBranch };
}

const rows = [
  createData('Walter White', 420, 0, 6090, 0, 'NA', 'NA', 0),
  createData('Willy Wonka', 420, 0, 6090, 0, 'NA', 'NA', 0),
  createData('Chinrasu', 420, 0, 6090, 0, 'NA', 'NA', 0),
  createData('PABLO ESCOBAR', 420, 0, 6090, 0, 'NA', 'NA', 0),
  createData('KIM JONG UN', 420, 0, 6090, 0, 'NA', 'NA', 0),
  createData('UnGoppan', 420, 0, 6090, 0, 'NA', 'NA', 0),
  createData('Michael Rayappan', 420, 0, 6090, 0, 'NA', 'NA', 0),
  createData('Lalgudi Karuppiah Gandhi', 420, 0, 6090, 0, 'NA', 'NA', 0),
  createData('GigaCHAD', 420, 0, 6090, 0, 'NA', 'NA', 0),
  createData('Shaquile O Neal', 420, 0, 6090, 0, 'NA', 'NA', 0)
];

export default function BasicTable() {
  const [value, setValue] = React.useState ();

  const history = useHistory();

  const groupPage = () => {
    history.push("/groupDetails")
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={2}>
        <div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
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
        <div><AttendanceBox /></div>
        <br />
        <div><CollectionWidget /></div>
        <br />
        <div><CashDetails /></div>
      </Grid>
      <Grid item xs={10}>
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
              {rows.map((row) => (
                <TableRow
                  hover={true}
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  onClick={groupPage}
                >
                  <TableCell component="th" scope="row">
                    <b>{row.name}</b>
                  </TableCell>
                  <TableCell align="center">{row.noOfCustomers}</TableCell>
                  <TableCell align="center">{row.collected}</TableCell>
                  <TableCell align="center">{row.dpd}</TableCell>
                  <TableCell align="center">{row.rescheduled}</TableCell>
                  <TableCell align="center">{row.target}</TableCell>
                  <TableCell align="center">{row.pending}</TableCell>
                  <TableCell align="center">{row.givenAtBranch}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}