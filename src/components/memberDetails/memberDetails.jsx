import React, {useState, useEffect} from 'react';
import { Grid } from '@material-ui/core';
import Divider from '@mui/material/Divider';
import { Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Box from '@mui/material/Box';
import { getGroup } from '../../service/auth.service';
import { getFO } from '../../service/auth.service';
import userService from '../../service/user.service';

export default function MemberDetails() {

  const [data1, setData1] = useState([]);
  const [data, setData] = useState([]);
  

  useEffect(()  => { 
    userService.getMemberDetails()
    .then(res => {
      setData(res.data.data[0]?.Prospects)
      console.log("Data")
    }).catch(err=>{
      console.log(err)
    })
    userService.getTransactionDetails()
    .then(res => {
      setData1(res.data.data)
    }).catch(err=>{
      console.log(err)
    })
    return () => {
      console.log("component is unmounting");
     }
  }
  ,[])  ;

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
              <p>GROUP NAME : {getGroup()?.groupName}</p>
              <p>{getGroup()?.productType}</p>
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
              <Typography component={'span'}>Customer of: {getFO()?.foName}</Typography>
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
              {data.map((details) => (
                <div key={details.prospectId}>
                <Divider />
                <br />
                <Grid container spacing={2}>
                    <Grid item xs={2}><AccountCircleIcon sx={{ color: "#ff0000" }} fontSize="large" /></Grid>
                    <Grid item xs={8}><h3>{details.prospectName}</h3>
                  <p>Ph: {details.prospectMobile}</p></Grid>
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
              {data1.map((details) => (
                <div key={details._id}>
                <Divider />
                <br />
                <Grid container spacing={2}>
                    <Grid item xs={2}><AccountCircleIcon sx={{ color: "#ff0000" }} fontSize="large" /></Grid>
                    <Grid item xs={8}><h3>{details.prospectName}</h3>
                  <p>Ph: {details.emiStatus}</p></Grid>
                  
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
