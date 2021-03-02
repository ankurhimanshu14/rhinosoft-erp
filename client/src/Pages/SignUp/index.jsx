//Pages/SignUp/index.jsx

import React from 'react';
import clsx from 'clsx';
import { Grid, Card, Typography, FormControl, TextField, FormHelperText, Button } from '@material-ui/core';
import ChevronLeftSharpIcon from '@material-ui/icons/ChevronLeftSharp';
import ChevronRightSharpIcon from '@material-ui/icons/ChevronRightSharp';
import useStyles from '../../customStyles';

import { signupUser, useRegisterState, useRegisterDispatch } from '../../Context'

const SignUp = (props) => {
    const classes = useStyles();

    const [fullName, setfullName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const dispatch = useRegisterDispatch()
    const { loading, errorMessage } = useRegisterState()

    const handleSignUp = async (e) => {
        e.preventDefault();
        let payload = {fullName, email, username, password}
        try {
            let response = await signupUser(dispatch, payload)
            console.log(response.user);
            if (!response.DATA) return
            props.history.push('/dashboard')
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
        <Grid container direction="row" justify="space-evenly" alignItems="stretch">
            <Card component="form" className={classes.paper}>
                <Typography gutterBottom variant="h5" component="h2">Create Account Here</Typography>
                {
                    errorMessage ? <p>{errorMessage}</p> : null
                }
                <FormControl fullWidth variant="outlined" className={classes.margin}>
                    <TextField
                    variant="outlined"
                    margin="dense"
                    name="fullName"
                    required
                    id="fullName"
                    label="Full Name"
                    type="text"
                    value={fullName}
                    onChange={e => setfullName(e.target.value)}
                    aria-describedby="fullName-helper-text"
                    />
                    <FormHelperText id="fullName-helper-text">Enter your full name here</FormHelperText>
                </FormControl>
                <FormControl fullWidth variant="outlined" className={classes.margin}>
                    <TextField
                    variant="outlined"
                    margin="dense"
                    name="email"
                    required
                    id="email"
                    label="Email"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    aria-describedby="email-helper-text"
                    />
                    <FormHelperText id="email-helper-text">Enter your official email here</FormHelperText>
                </FormControl>
                <FormControl fullWidth variant="outlined" className={classes.margin}>
                    <TextField
                    variant="outlined"
                    margin="dense"
                    name="username"
                    required
                    id="username"
                    label="Username"
                    type="text"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    aria-describedby="username-helper-text"
                    />
                    <FormHelperText id="username-helper-text">Your username should be unique</FormHelperText>
                </FormControl>
                <FormControl fullWidth variant="outlined" className={classes.margin}>
                    <TextField
                    variant="outlined"
                    margin="dense"
                    name="password"
                    required
                    id="password"
                    label="Password"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    aria-describedby="password-helper-text"
                    />
                    <FormHelperText id="password-helper-text">Your password should be a combination of capital letters, lowercase letters, special characters and numbers</FormHelperText>
                </FormControl>
                <Grid container direction="row" justify="space-evenly" alignItems="stretch">
                    <Button variant="outlined" className={clsx(classes.margin, classes.button)} href="/" startIcon={<ChevronLeftSharpIcon />} >Sign In Instead</Button>
                    <Button variant="outlined" className={clsx(classes.margin, classes.button)} endIcon={<ChevronRightSharpIcon />} onClick={handleSignUp}>Register</Button>
                </Grid>
            </Card>
        </Grid>
        </>
    )
};

export default SignUp;