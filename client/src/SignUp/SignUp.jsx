import {useReducer, useRef, useState, useEffect} from 'react';
import { formReducer, initialValue} from '../customHooks/formReducer';
import FormBuilder from '../components/FormBuilder';
import SignUpFields from './SignUpFields';
import Dialogbox from '../components/Dialogbox';
import CheckBox from '../components/CheckBox';

import clsx from 'clsx';
import { Grid, Typography, Card, Button } from '@material-ui/core';
import ChevronLeftSharpIcon from '@material-ui/icons/ChevronLeftSharp';
import ChevronRightSharpIcon from '@material-ui/icons/ChevronRightSharp';
import useStyles from '../customStyles';

const SignUp = () => {
    const classes = useStyles();
    
    const dialogRef = useRef();
    const [formState, formDispatch] = useReducer(formReducer, initialValue);
    const inputRef = useRef(formState);
    
    useEffect(() => {
        inputRef.current = formState;
    })

    const handleTextChange = event => {
        formDispatch({
            type: 'inputChange',
            field: event.target.name,
            payload: event.target.value
        })
    };
    
    const [checked, setChecked] = useState({
        role: "User"
    });

    const handleCheck = () => {
        setChecked({role: "Admin"});
    };

    const handleSubmit = () => {
        console.log(inputRef.current);
        dialogRef.current.handleClickOpen();
    }

    return (
        <>
        <Grid container direction="row" justify="space-evenly" alignItems="stretch">
            <Card component="form" className={classes.paper}>
                <Typography gutterBottom variant="h5" component="h2">Create Account Here</Typography>
                <FormBuilder ref={inputRef} items={SignUpFields} value={Object.keys(formState).map(state => (state))} onChange={e => handleTextChange(e)} />
                <CheckBox id="role" label="Role" value={checked} onChange={handleCheck} />
                <Grid container direction="row" justify="space-evenly" alignItems="stretch">
                    <Button variant="outlined" className={clsx(classes.margin, classes.button)} href="/" startIcon={<ChevronLeftSharpIcon />} >Sign In Instead</Button>
                    <Button variant="outlined" className={clsx(classes.margin, classes.button)} onClick={handleSubmit} endIcon={<ChevronRightSharpIcon />} >Register</Button>
                </Grid>
            </Card>
        </Grid>
        <Dialogbox ref={dialogRef} elementValue={inputRef.current} />
        </>
    )
};

export default SignUp;