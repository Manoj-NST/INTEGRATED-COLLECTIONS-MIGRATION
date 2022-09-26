import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';

export default function CashDetails() {
  return (
    <div>
      <Accordion defaultExpanded={true}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography>
            <b>Cash Details</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            <Grid item xs={2}></Grid>
            <Grid item xs={10}>
              <p style={{color: 'grey'}}>
                <b>API</b>
              </p>
              <p>Collected by FOs</p>
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={10}>
              <p style={{color: 'red'}}>
                <b>API</b>
              </p>
              <p>Given At Branch</p>
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={10}>
              <p style={{color: 'green'}}>
                <b>API</b>
              </p>
              <p>Pending Amount</p>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
