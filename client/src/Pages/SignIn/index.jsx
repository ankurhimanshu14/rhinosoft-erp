import React from 'react';
import clsx from 'clsx';
import FormBuilder from '../../Components/FormBuilder';
import SignInFields from './SignInFields';
import { Grid, Card, Typography, Button } from '@material-ui/core';
import useStyles from '../../customStyles';
import ChevronLeftSharpIcon from '@material-ui/icons/ChevronLeftSharp';
import ChevronRightSharpIcon from '@material-ui/icons/ChevronRightSharp';

import { signinUser, useSignInState, useSignInDispatch } from '../../Context/SignInContext';

const SignIn = (props) => {
    const classes = useStyles();

    const [input, setInput] = React.useState({
        username: '',
        password: ''
    });

    const chooseInput = (obj) => {
        Object.keys(obj).map(key => {return key})
    };

    const handleInput = prop => e => {
        setInput({[prop]: e.target.value})
    };

    const dispatch = useSignInDispatch()
    const { loading, errorMessage } = useSignInState();

    const handleSignIn = async (e) => {
        e.preventDefault();
        let payload = {input}
        try {
            let response = await signinUser(dispatch, payload)
            console.log(response);
            if (!response.DATA) return
            props.history.push('/dashboard')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Grid container direction="row" justify="space-evenly" alignItems="stretch">
            <Card component="form" className={classes.paper}>
                <Typography gutterBottom variant="h5" component="h2">Create Account Here</Typography>
                <FormBuilder items={SignInFields} value={chooseInput(input)} onChange={handleInput(input)} />
                <Grid container direction="row" justify="space-evenly" alignItems="stretch">
                    <Button variant="outlined" className={clsx(classes.margin, classes.button)} href="/" startIcon={<ChevronLeftSharpIcon />} >Sign In Instead</Button>
                    <Button variant="outlined" className={clsx(classes.margin, classes.button)} endIcon={<ChevronRightSharpIcon />} onClick={handleSignIn}>SignIn</Button>
                </Grid>
            </Card>
        </Grid>
    )
}

export default SignIn;