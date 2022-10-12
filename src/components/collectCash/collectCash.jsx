import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Grid } from '@material-ui/core';
import Divider from '@mui/material/Divider';
import { Typography } from '@mui/material';

export default function CollectCash() {
  function createData(name, payment, amount) {
    return { name, payment, amount };
  }
  const rows = [
    createData('Walter White', 'Full Payment', 6900),
    createData('Walter White Jr', 'No Payment', 0),
    createData('Skyler White', 'Partial Payment', 4200),
    createData('Walter White', 'Full Payment', 6900),
    createData('Walter White Jr', 'No Payment', 0),
    createData('Skyler White', 'Partial Payment', 4200),
  ];

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
        <p style={{ margin: '5px' }}>From</p>
        <br />
        <Grid container sx={{ pl: '2rem' }}>
          <Grid item xs={1}></Grid>
          <Grid item xs={5}>
            <p>
              <b>FO NAME</b>
            </p>
            <p>Branch Name</p>
          </Grid>
          <Grid item xs={5}>
            <p>
              <b>₹30,230</b>
            </p>
            <p>Total Cash in Hand</p>
          </Grid>
        </Grid>
        <br />
      </div>
      <div style={{ backgroundColor: 'silver', backgroundSize: '40' }}>
        <Typography sx={{ ml: 1 }} variant="h5">
          Customers
        </Typography>
      </div>
      <div>
        <Table sx={{ minwidth: 200 }} aria-label="simple table">
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.payment}</TableCell>
                <TableCell align="center">{row.amount}</TableCell>
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
