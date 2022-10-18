import React , {useEffect,useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Grid } from '@material-ui/core';
import Divider from '@mui/material/Divider';
import { Typography } from '@mui/material';
import userService from '../../service/user.service';
export default function CollectCash() {

  const [value, setValue] = useState([]);
  const [value1, setValue1] = useState([]);
  const getCollectCash = () => {
    userService.getCollectCash()
    .then(res => {
      setValue(res.data.data.CollectCash);
      setValue1(res.data.data.CollectCash.data)
    }).catch(err=>{
      console.log(err)
    })
  }

  useEffect(() => getCollectCash(),[])

  return (
    <div>
      <div>
        <Grid container spacing={3}>
          <Grid item xs={11}>
            <h2 style={{ padding: '10px' }}>Collect Cash</h2>
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
        <Divider m={4} pt={5} />
      </div>
      <div>
        <br />
        <Grid container sx={{ pl: '2rem' }}>
          <Grid item xs={1}></Grid>
          <Grid item xs={5}>
            <p>
              <b>{value.totalDeposited}</b>
            </p>
            <p>Total Deposited</p>
          </Grid>
          <Grid item xs={5}>
            <p>
              <b>{value.count}</b>
            </p>
            <p>Total Receipts</p>
          </Grid>
        </Grid>
        <br />
      </div>
      <div style={{ backgroundColor: 'silver', backgroundSize: '40' }}>
        <Typography component={'span'} sx={{ ml: 1 }} variant="h5">
          Customers
        </Typography>
      </div>
      <div>
        <Table sx={{ minwidth: 200 }} aria-label="simple table">
          <TableBody>
            {value1.map((list) => (
              <TableRow key={list.groupName} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {list.groupName}
                </TableCell>
                <TableCell align="center">{list.productType}</TableCell>
                <TableCell align="center">{list.emiStatus}</TableCell>
                <TableCell align="center">{list.collected}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <Divider />
      <br />
      {/* <div>
        <Grid container spacing={3}>
          <Grid item xs={0.5}></Grid>
          <Grid item xs={11}>
            <span>
              <Checkbox {...label} />
            </span>
            <span>Yes, I have received above cash from FO NAME</span>
          </Grid>
        </Grid>
      </div> */}
      {/* <div>
        <Grid container spacing={3}>
          <Grid item xs={0.5}></Grid>
          <Grid item xs={5}>
            <Button>Cash Collected</Button>
          </Grid>
          <Grid item xs={5}>
            <Button>Cancel</Button>
          </Grid>
        </Grid>
      </div> */}
    </div>
  );
}
