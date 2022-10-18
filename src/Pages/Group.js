import * as React from 'react';
import Typography from '@mui/material/Typography';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Grid } from '@material-ui/core';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import ResponsiveAppBar from '../components/Header/header';
import GroupTable from '../components/groupTable/groupTable';
import SimpleAccordion from '../components/monthlyCollectionPerformance/monthlyCollectionPerformance';
import FullWidthTabs from '../components/foDetails/foDetails';

export default function GroupDetails() {
  const redirect = useHistory();
  const homePage = () => {
    redirect.push('/home');
  };

  return (
    <div>
      <ResponsiveAppBar />
      <br />
      <Grid container spacing={3}>
        <Grid item xs={1} align="center">
          <br />
          <br />
          <br />
          <Button variant="filled" color="neutral" onClick={homePage}>
            <Typography component={'span'} fontSize="large">
              <ArrowBackIcon fontSize='large' />
            </Typography>
          </Button>
        </Grid>
        <Grid item xs={11}>
          <FullWidthTabs />
        </Grid>
      </Grid>
      <br />
      <SimpleAccordion />
      <br />
      <GroupTable />
    </div>
  );
}