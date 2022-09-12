import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

export default function CollectionWidget() {
  const theme = createTheme({
    status: {
      danger: '#e53e3e',
    },
    palette: {
      primary: {
        main: '#0971f1',
        darker: '#053e85',
      },
      neutral: {
        main: '#000000',
        contrastText: '#fff',
      },
      heaven: {
        main: '#ffffff',
      },
      pale: {
        main: '#e6b800',
      },
    },
  });

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
              <span>Achived</span>
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
