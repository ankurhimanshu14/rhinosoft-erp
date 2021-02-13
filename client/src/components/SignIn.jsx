import { useState, useCallback, useEffect, useRef, forwardRef } from 'react';

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

import Snack from './Snack';

import ChevronLeftSharpIcon from '@material-ui/icons/ChevronLeftSharp';
import ChevronRightSharpIcon from '@material-ui/icons/ChevronRightSharp';

import useStyles from '../customStyles';

const SignIn = forwardRef((props, ref) => {

    const snackRef = useRef();

    const [input, getInput] = useState({
        username: '',
        password: ''
    });

    const handleInput = (prop) => (event) => {
        getInput({...input, [prop]: event.target.value})
    };

    const [message, setMessage] = useState(null);

    const handleSubmit = useCallback(async () => {
        const requestOptions = {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
            body: JSON.stringify(input)
        };
      
        await fetch('http://localhost:5000/api/v1/users/login', requestOptions)
        .then(res => res.text())
        .then(result => {
            result = JSON.parse(result);
            if(result.DATA === "Access Granted") {
                setMessage('User found. ' + result.DATA);
            } else {
                setMessage('User not found. ' + result.DATA);
            }
          })
          .catch(err => {
            setMessage('There has been a problem with your fetch operation: ' + err);
          });
          snackRef.current.handleSnackOpen()
      },[input]);
  
      useEffect(() => {
      }, [handleSubmit]);

    const classes = useStyles();

    const { username, password } = input;
    return(
        <>
        <Grid container direction="row" justify="space-evenly" alignItems="stretch">
            <Card component="form" className={classes.paper}>
                <Typography gutterBottom variant="h5" component="h2">Sign In Here</Typography>
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
                <Grid container direction="row" justify="space-evenly" alignItems="stretch">
                    <Button variant="oultined" className={clsx(classes.margin, classes.button)} href="/users/register" startIcon={<ChevronLeftSharpIcon />} >Create account here</Button>
                    <Button variant="outlined" className={clsx(classes.margin, classes.button)} onClick = {handleSubmit} endIcon={<ChevronRightSharpIcon />} >Sign In</Button>
                </Grid>
            </Card>
        </Grid>
        <Snack ref={snackRef} elementValue = {message} />
        </>
    );
})

export default SignIn;