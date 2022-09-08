import React, { useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useHistory } from "react-router-dom";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { withRouter } from "react-router";
import { createHashHistory } from 'history'

import { environment } from '../../environments/environment';
import Diamond from '../../assest/collections_login.png';
import LoginRight from '../../assest/qwerty.svg';


import axios from 'axios';


function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();
export const history = createHashHistory();

export default function LogIn(props) {
    const { useState } = React;

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [APIData, setAPIData] = useState([]);
    const history = useHistory();

    const [eye, seteye] = useState(true);
    const [inpass, setinpass] = useState("password");
    const [warning, setwarning] = useState(false);
    const [tick, settick] = useState(false);

    const [inputText, setInputText] = useState({

        email: "",
        password: ""
    });

    const [wemail, setwemail] = useState(false);
    const [wpassword, setwpassword] = useState(false);

    const Eye = () => {
        if (inpass == "password") {
            setinpass("text");
            seteye(false);
            setwarning(true);
        }
        else {
            setinpass("password");
            seteye(true);
            setwarning(false);
        }
    }

    const Tick = () => {

        if (tick) {
            settick(false);
        }
        else {
            settick(true);
        }
    }

    const inputEvent = (event) => {

        const name = event.target.name;
        const value = event.target.value;
        setInputText((lastValue) => {
            return {
                ...lastValue,
                [name]: value
            }
        });

    }

    const submitForm = (e) => {

        e.preventDefault();

        setwemail(false);
        setwpassword(false);
        if (inputText.email == "") {
            setwemail(true);
        }
        else if (inputText.password == "")
            setwpassword(true);
        else {
            alert("form submitted");
        }
    }

    const customTheme = createTheme({
        palette: {
            primary: {
                main: "#262626"
            }
        }
    });

    const handleSubmit = (event) => {
        const data = new FormData(event.currentTarget);
        console.log(data);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
        event.preventDefault();
        setError(null);
        setLoading(true);

        axios.post(`${environment.apiUrl}/branchManager/login`, { email: data.get('email'),
                    password: data.get('password')
                }
                // { withCredentials: true }
            )
            .then(res => {
                console.log(res);
                setLoading(false);
                window.localStorage.setItem("token", res.data.token);
                history.push("/home");
            })
            .catch(err => {
                console.log(err);
                if (error.response.status === 401) setError(error.response.data.message);
                else setError("Something went wrong. Please try again later.");
                setLoading(false);
            });
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
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
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
                    elevation={6} square
                    sx={{
                        backgroundImage: 'url(' + LoginRight + ')',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: '100%',
                        backgroundPosition: 'center',
                    }}
                >
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
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
                            />
                            {/* <FormControlLabel
                                    control={<Checkbox value="remember" color="primary" />}
                                    label="Remember me"
                                /> */}
                            <ThemeProvider theme={customTheme}>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
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