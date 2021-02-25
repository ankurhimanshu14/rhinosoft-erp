import { useReducer, useRef, useCallback, forwardRef, useState, useEffect } from 'react';
import { formReducer, initialValue} from '../customHooks/formReducer';
import FormBuilder from '../components/FormBuilder';
import SignInFields from './SignInFields';
import Snack from '../components/Snack';

import clsx from 'clsx';
import { Grid, Typography, Card, Button } from '@material-ui/core';
import ChevronLeftSharpIcon from '@material-ui/icons/ChevronLeftSharp';
import ChevronRightSharpIcon from '@material-ui/icons/ChevronRightSharp';
import useStyles from '../customStyles';

const SignIn = forwardRef(() => {
    const classes = useStyles();
    const [formState, formDispatch] = useReducer(formReducer, initialValue);
    const inputRef = useRef(formState);

    const snackRef = useRef();

    const [message, setMessage] = useState(null);

    const handleTextChange = event => {
        formDispatch({
            type: 'inputChange',
            field: event.target.name,
            payload: event.target.value,
            value: inputRef.current.value
        })
        inputRef.current.value=''
    };
    
    const handleSubmit = useCallback(async () => {
        const requestOptions = {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
            body: JSON.stringify(inputRef.current)
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
      },[]);
  
      useEffect(() => {
      }, [handleSubmit]);

    return (
        <>
        <Grid container direction="row" justify="space-evenly" alignItems="stretch">
            <Card component="form" className={classes.paper}>
                <Typography gutterBottom variant="h5" component="h2">Sign In</Typography>
                <FormBuilder items={SignInFields} value={Object.keys(formState).map(state => (state))} onChange={e => handleTextChange(e)} />
                <Grid container direction="row" justify="space-evenly" alignItems="stretch">
                    <Button variant="outlined" className={clsx(classes.margin, classes.button)} href="/users/register" startIcon={<ChevronLeftSharpIcon />} >Create account here</Button>
                    <Button variant="outlined" className={clsx(classes.margin, classes.button)} onClick={handleSubmit} endIcon={<ChevronRightSharpIcon />} >Sign In</Button>
                </Grid>
            </Card>
        </Grid>
        <Snack ref={snackRef} elementValue = {message} />
        </>
    )
});

export default SignIn;