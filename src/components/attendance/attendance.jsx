import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';

export default function AttendanceBox() {
  return (
    <div>
      <Accordion defaultExpanded={true}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography>
            <b>Attendance</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <span>
                <b>NA</b>
              </span>
            </Grid>
            <Grid item xs={6}>
              <span style={{color:'#e6b800'}}>
                <b>NA</b>
              </span>
            </Grid>
            <Grid item xs={6}>
              <span>At Work</span>
            </Grid>
            <Grid item xs={6}>
              <span>Not At Work</span>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
