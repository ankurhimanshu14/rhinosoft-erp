import { useState, useCallback, useEffect } from 'react';

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

function SignIn(props) {

    const [input, getInput] = useState({
        username: '',
        password: ''
    });

    const handleInput = (prop) => (event) => {
        getInput({...input, [prop]: event.target.value})
    };

    const handleSubmit = useCallback(async () => {
        const requestOptions = {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
            body: JSON.stringify(input)
        };
      
        const response = await fetch('http://localhost:5000/api/v1/users/login', requestOptions)
        const result = await response.text()
            alert(result)
      },[input]);
  
      useEffect(() => {
      }, [handleSubmit]);

    const classes = useStyles();

    const { username, password } = input;
    return(
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
                    <Button variant="oultined" className={clsx(classes.margin, classes.button)} href="/" startIcon={<ChevronLeftSharpIcon />} >Create account here</Button>
                    <Button variant="outlined" className={clsx(classes.margin, classes.button)} onClick = {handleSubmit} endIcon={<ChevronRightSharpIcon />} >Sign In</Button>
                </Grid>
            </Card>
        </Grid>
    );
}

export default SignIn;