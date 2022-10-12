import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Grid } from '@material-ui/core';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import Drawer from '@mui/material/Drawer';

import CollectCash from '../collectCash/collectCash';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  //   SIDEBAR / DRAWER
  const [state, setState] = React.useState({});
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <Box sx={{ minWidth: 400 }} onClick={toggleDrawer(anchor, false)}>
      <CollectCash />
    </Box>
  );

  return (
    <Box sx={{ bgcolor: 'background.paper', minWidth: 500 }}>
      <AppBar position="static">
        <Tabs
          style={{ backgroundColor: 'white', color: 'black' }}
          TabIndicatorProps={{ style: { background: 'red' } }}
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="FO NAME" {...a11yProps(0)} />
        </Tabs>
      </AppBar>
      <SwipeableViews axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'} index={value} onChangeIndex={handleChangeIndex}>
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <p>Center Name</p>
              <p>
                <b>API</b>
              </p>
            </Grid>
            <Grid item xs={3}>
              <p>FO ID</p>
              <p>
                <b>API</b>
              </p>
            </Grid>
            <Grid item xs={3}>
              <p>Joined Date</p>
              <p>
                <b>API</b>
              </p>
            </Grid>
            <Grid item xs={2}>
              <p>FO MOBILE</p>
              <p>
                <b>API</b>
              </p>
            </Grid>
            <Grid item xs={1} align="right">
              <Button onClick={handleClick} aria-describedby={id}>
                <MoreVertIcon style={{ color: 'black' }} />
              </Button>
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
              >
                <Typography sx={{ p: 2 }}>
                  {['right'].map((anchor) => (
                    <React.Fragment key={anchor}>
                      <Button style={{ color: 'black' }} onClick={toggleDrawer(anchor, true)}>
                        Collect Cash
                      </Button>
                      <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                        {list(anchor)}
                      </Drawer>
                    </React.Fragment>
                  ))}
                </Typography>
              </Popover>
            </Grid>
          </Grid>
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
