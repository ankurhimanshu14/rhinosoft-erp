import { useState, useRef } from 'react';

import clsx from 'clsx';

import {
    Grid,
    Paper,
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

function SignUp() {
    const classes = useStyles();

    const dialogboxRef = useRef();

    const [input, setInput] = useState({
        fullName: '',
        email: '',
        username: '',
        password: ''
    });

    const handleInput = (prop) => (event) => {
        setInput({...input, [prop]: event.target.value})
    };

    return (
        <>
        <Grid container direction="row" justify="space-evenly" alignItems="stretch">
            <Paper component="form" className={classes.paper}>
                <Typography gutterBottom variant="h5" component="h2">Create Account Here</Typography>
            <FormControl fullWidth className={classes.margin} variant="outlined">
                <InputLabel htmlFor="fullName">Full Name</InputLabel>
                <OutlinedInput
                    required
                    type="text"
                    name="fullName"
                    id="fullName"
                    aria-describedby="fullName-helper-text"
                    value={input.fullName}
                    onChange={handleInput('fullName')}
                    labelWidth={80}
                />
                <FormHelperText id="fullName-helper-text">Enter Full Name</FormHelperText>
            </FormControl>
            <FormControl fullWidth className={classes.margin} variant="outlined">
                <InputLabel htmlFor="email">Email ID</InputLabel>
                <OutlinedInput
                    required
                    type="email"
                    name="email"
                    id="email"
                    aria-describedby="email-helper-text"
                    value={input.email}
                    onChange={handleInput('email')}
                    labelWidth={80}
                />
                <FormHelperText id="email-helper-text">Enter Email ID here</FormHelperText>
            </FormControl>
            <FormControl fullWidth className={classes.margin} variant="outlined">
                <InputLabel htmlFor="username">Username</InputLabel>
                <OutlinedInput
                    required
                    type="text"
                    name="username"
                    id="username"
                    aria-describedby="username-helper-text"
                    value={input.username}
                    onChange={handleInput('username')}
                    labelWidth={80}
                />
                <FormHelperText id="username-helper-text">Enter unique username here</FormHelperText>
            </FormControl>
            <FormControl fullWidth className={classes.margin} variant="outlined">
                <InputLabel htmlFor="password">Password</InputLabel>
                <OutlinedInput
                    required
                    type="password"
                    name="password"
                    id="password"
                    aria-describedby="password-helper-text"
                    value={input.password}
                    onChange={handleInput('password')}
                    labelWidth={80}
                />
                <FormHelperText id="password-helper-text">Do not share your password</FormHelperText>
            </FormControl>
            <Grid container direction="row" justify="space-evenly" alignItems="stretch">
                <Button variant="oultined" className={clsx(classes.margin, classes.button)} href="/" startIcon={<ChevronLeftSharpIcon />} >Do you have an account?</Button>
                <Button variant="outlined" className={clsx(classes.margin, classes.button)} onClick={() => { dialogboxRef.current.handleClickOpen() }} endIcon={<ChevronRightSharpIcon />} >Register</Button>
            </Grid>
            </Paper>
        </Grid>
        <Dialogbox ref={dialogboxRef} data={input} />
        </>
    )
}

export default SignUp;