import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function CashDetails() {
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
            <b>Cash Details</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            <Grid item xs={2}></Grid>
            <Grid item xs={10}>
              <p>
                <b>API</b>
              </p>
              <p>Collected by FOs</p>
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={10}>
              <p>
                <b>API</b>
              </p>
              <p>Given At Branch</p>
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={10}>
              <p>
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
