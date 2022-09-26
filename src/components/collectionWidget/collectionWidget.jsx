import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

export default function CollectionWidget() {
  return (
    <div>
      <Accordion defaultExpanded={true}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography>
            <b>Collection</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Stack direction="row" sx={{ color: '#ff2360' }}>
              <CircularProgress style={{ 
              position: 'relative',
              margin: '0 auto' }} 
              size={80} 
              variant="determinate" 
              value={80} color="inherit" />
            </Stack>
          <br />
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <span>
                Target
              </span>
            </Grid>
            <Grid item xs={6}>
              <span>
                <b>API</b>
              </span>
            </Grid>
            <Grid item xs={6}>
              <span>Achieved</span>
            </Grid>
            <Grid item xs={6}>
              <span><b>API</b></span>
            </Grid>
            <Grid item xs={6}>
              <span>Pending</span>
            </Grid>
            <Grid item xs={6}>
              <span><b>API</b></span>
            </Grid>
            <Grid item xs={6}>
              <span>Prediction: <b>NA</b></span>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
