import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';

export default function SimpleAccordion() {
  return (
    <div>
      <Accordion defaultExpanded={true}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography>
            <b>Current_Month's</b> Collection Performance
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <span>Collection</span>
            </Grid>
            <Grid item xs={2}>
              <span>
                Prediction: <b>NA</b>
              </span>
            </Grid>
            <Grid item xs={3}>
              <span>Customers</span>
            </Grid>
            <Grid item xs={2}>
              <span>
                Prediction: <b>NA</b>
              </span>
            </Grid>
            <Grid item xs={1.5}>
              <span>JLG</span>
            </Grid>
            <Grid item xs={1}>
              <span>FAR</span>
            </Grid>
          </Grid>

          <br />

          <Grid container spacing={2}>
            <Grid item xs={1}>
              <p><b>NA</b></p>
              <p>Target</p>
            </Grid>
            <Grid item xs={1}>
              <p><b>API</b></p>
              <p>Achieved</p>
            </Grid>
            <Grid item xs={2}>
              <Stack direction="row" sx={{ color: '#ff2360' }}>
                <CircularProgress variant="determinate" value={80} color="inherit"/>
              </Stack>
            </Grid>
            <Grid item xs={1}>
                <p><b>NA</b></p>
                <p>Target</p>
            </Grid>
            <Grid item xs={1}>
                <p><b>API</b></p>
                <p>Visited</p>
            </Grid>
            <Grid item xs={1}>
                <p style={{color: '#e6b800'}}><b>API</b></p>
                <p>DPD</p>
            </Grid>
            <Grid item xs={2}>
                <p style={{color: '#e6b800'}}><b>API</b></p>
                <p>Rescheduled</p>
            </Grid>
            <Grid item xs={1.5}>
                <p><b>API</b></p>
                <p>Achieved</p>
            </Grid>
            <Grid item xs={1}>
                <p><b>API</b></p>
                <p>Achieved</p>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
