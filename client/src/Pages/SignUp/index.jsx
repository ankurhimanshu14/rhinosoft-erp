//Pages/SignUp/index.jsx

import React from 'react';
import clsx from 'clsx';
import { Grid, Card, Typography, FormControl, TextField, FormHelperText, Button } from '@material-ui/core';
import ChevronLeftSharpIcon from '@material-ui/icons/ChevronLeftSharp';
import ChevronRightSharpIcon from '@material-ui/icons/ChevronRightSharp';
import useStyles from '../../customStyles';

const SignUp = (props) => {
    const classes = useStyles();
    return (
        <>
        <Grid container direction="row" justify="space-evenly" alignItems="stretch">
            <Card component="form" className={classes.paper}>
                <Typography gutterBottom variant="h5" component="h2">Create Account Here</Typography>
                <FormControl fullWidth variant="outlined" className={classes.margin}>
                    <TextField
                    variant="outlined"
                    margin="dense"
                    name="fullName"
                    required
                    id="fullName"
                    label="Full Name"
                    type="text"
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
                    aria-describedby="password-helper-text"
                    />
                    <FormHelperText id="password-helper-text">Your password should be a combination of capital letters, lowercase letters, special characters and numbers</FormHelperText>
                </FormControl>
                <Grid container direction="row" justify="space-evenly" alignItems="stretch">
                    <Button variant="outlined" className={clsx(classes.margin, classes.button)} href="/" startIcon={<ChevronLeftSharpIcon />} >Sign In Instead</Button>
                    <Button variant="outlined" className={clsx(classes.margin, classes.button)} endIcon={<ChevronRightSharpIcon />} >Register</Button>
                </Grid>
            </Card>
        </Grid>
        </>
    )
};

export default SignUp;