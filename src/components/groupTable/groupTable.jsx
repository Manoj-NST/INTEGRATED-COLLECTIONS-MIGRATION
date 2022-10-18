import React, { useState , useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Grid } from '@material-ui/core';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import SearchBar from 'material-ui-search-bar';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import GroupAttendance from '../attendanceGroup/attendanceGroup';
import CollectionWidget from '../collectionWidget/collectionWidget';
import MemberDetails from '../memberDetails/memberDetails';
import userService from '../../service/user.service';


export default function GroupTable() {
  const [value, setValue] = React.useState();

  const [searched, setSearched] = useState('');

  const requestSearch = (searchedVal) => {

  };
  const cancelSearch = () => {
    setSearched('');
    requestSearch(searched);
  };

  //   SIDEBAR / DRAWER
  const [state, setState] = React.useState({});
  const toggleDrawer = (anchor, open, details) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
    window.localStorage.setItem("group",JSON.stringify(details))
    if(open === false){
      localStorage.removeItem("group")
    }
    
  };
  const list = (anchor) => (
    <Box sx={{ minWidth: 400 }} onClick={toggleDrawer(anchor, false)}>
      <MemberDetails />
    </Box>
  );

  const [data, setData] = useState([]);
  const getDashboardGroupDetails = () => {
    userService.getDashboardGroupDetails()
    .then(res => {
      setData(res.data.data)
    }).catch(err=>{
      console.log(err)
    })
  }

  useEffect(() => getDashboardGroupDetails(),[])


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
        <GroupAttendance />
        <br />
        <CollectionWidget />
        <br />
      </Grid>
      <Grid item xs={10}>
        <SearchBar
          value={searched}
          onChange={(searchVal) => requestSearch(searchVal)}
          onCancelSearch={() => cancelSearch()}
        />
        <TableContainer component={Paper}>
          <Table sx={{ minwidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">GROUP NAME</TableCell>
                <TableCell align="center">PRODUCT NAME</TableCell>
                <TableCell align="center">COLLECTED</TableCell>
                <TableCell align="center">DPD</TableCell>
                <TableCell align="center">COLLECTED / REMAINING</TableCell>
                <TableCell align="center">TOTAL EMI</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((details) => (
                <React.Fragment key={details.groupId}>
                  <TableRow
                    hover={true}
                    key={details.groupName}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    onClick={toggleDrawer('right', true, details)}
                  >
                    <Drawer anchor={'right'} open={state['right']} onClose={toggleDrawer('right', false)} BackdropProps={{ invisible: true }}>
                      {list('right')}
                    </Drawer>
                    <TableCell component="th" scope="row" align="left">
                      <b>{details.groupName}</b>
                    </TableCell>
                    <TableCell align="center">{details.productType}</TableCell>
                    <TableCell align="center">{details.collected}</TableCell>
                    <TableCell align="center">{details.DPD}</TableCell>
                    <TableCell align="center">{details.collected} / {details.EMI - details.collected} </TableCell>
                    <TableCell align="center">{details.EMI}</TableCell>
                  </TableRow>
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}