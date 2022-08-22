import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import classes from './../pages/Login.css'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(2),

        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '300px',
        },
        '& .MuiButtonBase-root': {
            margin: theme.spacing(2),
        },
    },
}));
const LogIn = () => {
    const classes = useStyles();
    const { useState } = React;

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




    return (
        <>
            <div className="container">
                <div className="card">
                    <div className="form">
                        <div className="left-side">
                            <img src="https://imgur.com/K230JeW.jpg" />


                        </div>
                        <div className="right-side">
                            <div className="heading">
                                <h3>Log in to MIFIX.</h3>

                            </div>
                            {/* <div className="social">
                                <span><i className="fa fa-google"></i>Log in with Google</span>
                                <span><i className="fa fa-facebook-f"></i>Log in with Facebook</span>
                            </div> */}
                            <hr />
                            <div className="or">

                            </div>
                            <form onSubmit={submitForm}>
                                <div className="input-text">
                                    <input type="text" className={`${wemail ? "text-warning" : ""}`} value={inputText.email} onChange={inputEvent} name="email" />
                                    <label>Email</label>
                                    <i className="fa fa-envelope"></i>
                                </div>
                                <div className="input-text">
                                    <input type={inpass} className={` ${warning ? "warning" : ""} ${wpassword ? "text-warning" : ""}`} value={inputText.password} onChange={inputEvent} name="password" />
                                    <label>Password</label>
                                    <i className="fa fa-lock"></i>
                                    <i onClick={Eye} className={`fa ${eye ? "fa-eye-slash" : "fa-eye"}`}></i>
                                </div>

                                {/* <div className="rem_pass">
                                    <div className="remember">
                                        <span onClick={Tick} className={` ${tick ? "green" : ""}`}><i className="fa fa-check"></i></span>
                                        <p>Remember Me</p>
                                    </div>
                                    <a href="#">Forgot your password?</a>
                                </div> */}
                                <div className="button">
                                    <button type="submit">Login</button>

                                </div>
                            </form>
                            {/* <div className="register">
                                <p>Didn't have an account?<a href="#"> Register</a></p>
                            </div> */}



                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}

export default LogIn;