import * as React from 'react';
import { useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';
import userService from '../../service/user.service';

export default function CashDetails() {

  const [value,setValue] = React.useState('');
  const [value1,setValue1] = React.useState('');
  const getDashboardDailyCollections = () => {
    userService.getDashboardDailyCollections()
    .then(res => {
      setValue(res.data.data.dashboarddailycollections)
    }).catch(err=>{
      console.log(err)
    })
  }

  const givenatbranch = () => {
    userService.getGivenAtBranch()
    .then(res => {
      setValue1(res.data.data)
    }).catch(err=>{
      console.log(err)
    })
  }

  useEffect(() => getDashboardDailyCollections(), []);

  useEffect(() => givenatbranch(), []);

  return (
    <div>
      <Accordion defaultExpanded={true}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography component={'span'}>
            <b>Cash Details</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            <Grid item xs={2}></Grid>
            <Grid item xs={10}>
              <p style={{color: 'grey'}}>
                <b>{value?.Achieved}</b>
              </p>
              <p>Collected by FOs</p>
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={10}>
              <p style={{color: 'red'}}>
                <b>{value1.GivenAtBranch}</b>
              </p>
              <p>Given At Branch</p>
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={10}>
              <p style={{color: 'green'}}>
                <b>NA</b>
              </p>
              <p>Pending Amount</p>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
