import { useState, useRef } from 'react';

import clsx from 'clsx';

import {
    Grid,
    Card,
    Typography,
    FormControl,
    OutlinedInput,
    InputLabel,
    FormHelperText,
    Button
} from '@material-ui/core';

import ChevronLeftSharpIcon from '@material-ui/icons/ChevronLeftSharp';
import ChevronRightSharpIcon from '@material-ui/icons/ChevronRightSharp';

import useStyles from '../customStyles';
import Dialogbox from './Dialogbox';
import CheckBox from './CheckBox';

function SignUp() {
    const classes = useStyles();

    const dialogboxRef = useRef();

    const [input, setInput] = useState({
        fullName: '',
        email: '',
        username: '',
        password: '',
        role: true
    });

    const [checked, setCheck] = useState();

    const handleCheck = () => {
        setCheck(!checked);
        console.log(checked);
    }

    const handleInput = (prop) => (event) => {
        setInput({...input, [prop]: event.target.value})
    };

    const { fullName, email, username, password } = input;

    return (
        <>
        <Grid container direction="row" justify="space-evenly" alignItems="stretch">
            <Card component="form" className={classes.paper}>
                <Typography gutterBottom variant="h5" component="h2">Create Account Here</Typography>
            <FormControl fullWidth className={classes.margin} variant="outlined">
                <InputLabel htmlFor="fullName">Full Name</InputLabel>
                <OutlinedInput
                    margin="dense"
                    required
                    type="text"
                    name="fullName"
                    id="fullName"
                    aria-describedby="fullName-helper-text"
                    value={fullName}
                    onChange={handleInput('fullName')}
                    labelWidth={80}
                />
                <FormHelperText id="fullName-helper-text">Enter Full Name</FormHelperText>
            </FormControl>
            <FormControl fullWidth className={classes.margin} variant="outlined">
                <InputLabel htmlFor="email">Email ID</InputLabel>
                <OutlinedInput
                    margin="dense"
                    required
                    type="email"
                    name="email"
                    id="email"
                    aria-describedby="email-helper-text"
                    value={email}
                    onChange={handleInput('email')}
                    labelWidth={80}
                />
                <FormHelperText id="email-helper-text">Enter Email ID here</FormHelperText>
            </FormControl>
            <FormControl fullWidth className={classes.margin} variant="outlined">
                <InputLabel htmlFor="username">Username</InputLabel>
                <OutlinedInput
                    margin="dense"
                    required
                    type="text"
                    name="username"
                    id="username"
                    aria-describedby="username-helper-text"
                    value={username}
                    onChange={handleInput('username')}
                    labelWidth={80}
                />
                <FormHelperText id="username-helper-text">Enter unique username here</FormHelperText>
            </FormControl>
            <FormControl fullWidth className={classes.margin} variant="outlined">
                <InputLabel htmlFor="password">Password</InputLabel>
                <OutlinedInput
                    margin="dense"
                    required
                    type="password"
                    name="password"
                    id="password"
                    aria-describedby="password-helper-text"
                    value={password}
                    onChange={handleInput('password')}
                    labelWidth={80}
                />
                <FormHelperText id="password-helper-text">Do not share your password</FormHelperText>
            </FormControl>
            <FormControl>
            <InputLabel htmlFor="role">Role</InputLabel>
                <CheckBox
                    name="role"
                    id="role"
                    checked ={checked}
                    onChange = {handleCheck}
                />

            </FormControl>
            <Grid container direction="row" justify="space-evenly" alignItems="stretch">
                <Button variant="oultined" className={clsx(classes.margin, classes.button)} href="/" startIcon={<ChevronLeftSharpIcon />} >Sign in instead</Button>
                <Button variant="outlined" className={clsx(classes.margin, classes.button)} onClick={() => { dialogboxRef.current.handleClickOpen() }} endIcon={<ChevronRightSharpIcon />} >Register</Button>
            </Grid>
            </Card>
        </Grid>
        <Dialogbox ref={dialogboxRef} elementValue={input} />
        </>
    )
}

export default SignUp;