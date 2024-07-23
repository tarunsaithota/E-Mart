import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Modal from "@mui/material/Modal";
import axios from "axios";
import SignUp from "./SignUp";

const Login = () => {

    const [data, setdata] = useState({
        username: '',
        password: ''
    })

    const [result, setResult] = useState('');

    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);

    const handleClose = () => setOpen(false);

    const[passwordVisisble, setPasswordVisisble] = useState(false);

    const checkPasswordVisisble = () => {
        setPasswordVisisble(!passwordVisisble)
    }

    const changeHandler = e => {
        setdata({ ...data, [e.target.name]: e.target.value })
    }

    const isFormFilled = () => {
        return (
            data.username !== '' && 
            data.password !== ''
        );
    }

    const submitHandler = e => {
        e.preventDefault();
    }
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        height: 600,
        bgcolor: 'white',
        p: 4,
    };
    return (
        <>
            {/* <LoginNavbar /> */}
            <div>
                    <div className="login">
                        <form>
                            <div className="username">
                                <TextField
                                    className="username"
                                    required
                                    id="outlined-required"
                                    label="Username"
                                    value={data.username}
                                    name='username'
                                    onChange={changeHandler}
                                />
                            </div>
                            <div className="pass">
                                <TextField
                                    className="pass"
                                    required
                                    id="outlined-password-input"
                                    label="Password"
                                    type= {passwordVisisble ? "text" : "password"}
                                    autoComplete="current-password"
                                    name='password'
                                    value={data.password}
                                    onChange={changeHandler}
                                />
                            </div>
                            <div className="checkbox">
                                <FormControlLabel control={<Checkbox onChange={checkPasswordVisisble}/>} label="Show Password" />
                            </div>
                            <div className="loginbutton">
                                <Button disabled ={!isFormFilled()} onClick={submitHandler} variant="contained">Login</Button>
                            </div>
                        </form>
                        <div>
                            <h6>Do not have account? <Button onClick={handleOpen}> Sign up now</Button> </h6>
                            <center><Modal
                                open={open}
                                onClose={handleClose}
                            >
                                <Box sx={style} className="modalbox">
                                    <SignUp />
                                </Box>
                            </Modal></center>
                        </div>
                    </div>
            </div>
            
        </>
    )
}
export default Login;