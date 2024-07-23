
import React, {useState} from "react";
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {auth} from '../Firebase';

const SignUp = () => {

    const [signUpData, setSignUpData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const [signUpResult, setSignUpResult] = useState('');

    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);

    const handleClose = () => setOpen(false);

    const[passwordVisisble, setPasswordVisisble] = useState(false);

    const checkPasswordVisisble = () => {
        setPasswordVisisble(!passwordVisisble)
    }

    const signupchangeHandler = e => {
        setSignUpData({...signUpData, [e.target.name]: e.target.value})
    }

    const isSignUpFormFilled = () => {
        return (
            signUpData.username !== '' && 
            signUpData.email !== '' && 
            signUpData.password !== '' && 
            signUpData.confirmPassword !== ''
        );
    }

    const email_regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const signUpSubmitHandler = e => {
        e.preventDefault();
        if (signUpData.password !== signUpData.confirmPassword) {
            alert('Password not matched!');
        }
        else if (!signUpData.email.match(email_regex)){
            alert('Please enter an valid email');
        }
        else {
            auth.createUserWithEmailAndPassword(signUpData.email,signUpData.password).then(
                user => console.log(user)
                ).catch(err => console.log(err))
        }
        console.log(setSignUpResult(signUpData));
    }

    return (
        <>
            <center><h2 className="signup-title">Sign up form</h2>
                <div className="signup">
                    <form>
                        <div className="username">
                            <TextField
                                className="username"
                                required
                                id="outlined-required"
                                label="Username"
                                value={signUpData.username}
                                name='username'
                                onChange={signupchangeHandler}
                            />
                        </div>
                        <div className="email">
                            <TextField
                                className="email"
                                required
                                id="outlined-required"
                                label="Email"
                                value={signUpData.email}
                                name='email'
                                onChange={signupchangeHandler}
                            />
                        </div>
                        <div className="pass">
                            <TextField
                                className="pass"
                                required
                                id="outlined-password-input"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                name='password'
                                value={signUpData.password}
                                onChange={signupchangeHandler}
                            />
                        </div>
                        <div className="confirmpass">
                            <TextField
                                className="pass"
                                required
                                id="outlined-password-input"
                                label="Confirm Password"
                                type={passwordVisisble ? "text" : "password"}
                                autoComplete="current-password"
                                name='confirmPassword'
                                value={signUpData.confirmPassword}
                                onChange={signupchangeHandler}
                            />
                        </div>
                        <div className="checkbox">
                            <FormControlLabel control={<Checkbox onChange={checkPasswordVisisble} />} label="Show Password" />
                        </div>
                        <div className="loginbutton">
                            <Button disabled={!isSignUpFormFilled()} onClick={signUpSubmitHandler} variant="contained">Sign up</Button>
                        </div>
                    </form>
                </div></center>
        </>
    )
}

export default SignUp;

