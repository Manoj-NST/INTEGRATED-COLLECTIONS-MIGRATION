import React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useHistory } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { createHashHistory } from 'history'

import Diamond from '../../src/assets/collections_login.png'
import LoginRight from '../../src/assets/qwerty.svg';
import { login } from '../service/auth.service';


const theme = createTheme();
export const history = createHashHistory();

export default function LogIn(props) {

    const { useState } = React;
     useState([]);
    const history = useHistory();

    const customTheme = createTheme({
        palette: {
            primary: {
                main: "#262626"
            }
        }
    });

    const handleSubmit = (event) => {
      const data = new FormData(event.currentTarget);
      event.preventDefault();
      login(data.get('email'),data.get('password')).then(
        () => {
          history.push("/home");
        }
      )
    };

    return (
        <ThemeProvider theme={theme}>
          <Grid container component="main" sx={{ height: '100vh' }}>
            <CssBaseline />
            <Grid
              item
              xs={false}
              sm={5}
              md={8}
              sx={{
                backgroundImage: 'url(' + Diamond + ')',
                backgroundRepeat: 'no-repeat',
                backgroundColor: (t) => (t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900]),
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <Grid
              item
              xs={12}
              sm={8}
              md={4}
              component={Paper}
              elevation={6}
              square
              sx={{
                backgroundImage: 'url(' + LoginRight + ')',
                backgroundRepeat: 'no-repeat',
                backgroundColor: (t) => (t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900]),
                backgroundSize: '100%',
                backgroundPosition: 'center',
              }}
            >
              <Box
                sx={{
                  my: 45,
                  mx: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    variant="filled"
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    variant="filled"
                  />
                  {/* <FormControlLabel
                                        control={<Checkbox value="remember" color="primary" />}
                                        label="Remember me"
                                    /> */}
                  <ThemeProvider theme={customTheme}>
                    <Button 
                        type="submit" 
                        fullWidth variant="contained" 
                        sx={{ mt: 3, mb: 2 }}
                        >
                      Sign In
                    </Button>
                  </ThemeProvider>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </ThemeProvider>
      );
}