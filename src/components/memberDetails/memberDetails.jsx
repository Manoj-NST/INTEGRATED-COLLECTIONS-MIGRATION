import React from 'react';
import { Grid } from '@material-ui/core';
import Divider from '@mui/material/Divider';
import { Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Box from '@mui/material/Box';

export default function MemberDetails() {
  function createData(name, number) {
    return { name, number };
  }
  const rows = [createData('Walter White', 6900), createData('Walter White Jr', 0), createData('Skyler White', 4200)];

  return (
    <div>
      <div>
        <Grid container spacing={3}>
          <Grid item xs={2} align="right">
            <br />
            <AccountCircleIcon sx={{ color: "#ff0000" }} fontSize="large" />
          </Grid>
          <Grid item xs={8}>
            <h5 style={{ padding: '10px' }}>
              <p>GROUP NAME</p>
              <p>JLG</p>
            </h5>
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
        <Divider />
      </div>
      <div>
        <br />
        <Grid container sx={{ pl: '2rem' }}>
          <Grid item xs={1}></Grid>
          <Grid item xs={10}>
            <Box sx={{ backgroundColor: '#cccfcd' }}>
              <Typography>Customer of: FO NAME</Typography>
            </Box>
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
        <br />
      </div>
      <div>
        <br />
        <Grid container sx={{ pl: '2rem' }}>
          <Grid item xs={1}></Grid>
          <Grid item xs={10}>
            <Box sx={{ p: 2, border: '1px dashed grey' }}>
              <h3> Members </h3>
              {rows.map((row) => (
                <div>
                <Divider />
                <br />
                <Grid container spacing={2}>
                    <Grid item xs={2}><AccountCircleIcon sx={{ color: "#ff0000" }} fontSize="large" /></Grid>
                    <Grid item xs={8}><h3>{row.name}</h3>
                  <p>Ph: {row.number}</p></Grid>
                </Grid>
                </div>
              ))}
            </Box>
          </Grid>
        </Grid>
        <br />
      </div>
      <div>
        <br />
        <Grid container sx={{ pl: '2rem' }}>
          <Grid item xs={1}></Grid>
          <Grid item xs={10}>
            <Box sx={{ p: 2, border: '1px dashed grey' }}>
              <h3> Recent Payments </h3>
              {rows.map((row) => (
                <div>
                <Divider />
                <br />
                <Grid container spacing={2}>
                    <Grid item xs={2}><AccountCircleIcon sx={{ color: "#ff0000" }} fontSize="large" /></Grid>
                    <Grid item xs={8}><h3>{row.name}</h3>
                  <p>Ph: {row.number}</p></Grid>
                </Grid>
                </div>
              ))}
            </Box>
          </Grid>
        </Grid>
        <br />
      </div>
    </div>
  );
}
