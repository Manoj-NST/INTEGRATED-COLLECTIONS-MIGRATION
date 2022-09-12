import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function AttendanceBox() {
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
      }
    },
  });

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
              <span>
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
