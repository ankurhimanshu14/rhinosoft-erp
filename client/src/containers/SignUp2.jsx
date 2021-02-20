import { useState, useRef } from 'react';

import clsx from 'clsx';

import {
    Grid,
    Card,
    Typography,
    Button
} from '@material-ui/core';

import ChevronLeftSharpIcon from '@material-ui/icons/ChevronLeftSharp';
import ChevronRightSharpIcon from '@material-ui/icons/ChevronRightSharp';

import useStyles from '../customStyles';
import Dialogbox from '../components/Dialogbox';
// import CheckBox from '../components/CheckBox';
import Form from '../components/Form';

const formItems = [
    {
        propName: "fullName",
        label: "Full Name",
        helperLabel: "Enter full name here",
        helperId: "fullName-helper-text",
        type: "text",
        required: true
    },
    {
        propName: "email",
        label: "Email",
        helperLabel: "Enter email ID here",
        helperId: "email-helper-text",
        type: "email",
        required: true
    },
    {
        propName: "username",
        label: "Username",
        helperLabel: "Username should be unique",
        helperId: "username-helper-text",
        type: "text",
        required: true
    },
    {
        propName: "password",
        label: "Password",
        helperLabel: "Password should contain uppercase letters, lowercase letters, special characters and numbers",
        helperId: "password-helper-text",
        type: "password",
        required: true
    }
];

function SignUp2(props) {
    const classes = useStyles();

    const dialogboxRef = useRef();

    const [input, setInput] = useState({
        input: ''
    });

    let { propName, ...other } = props;

    const handleInput = (propName) = (event) => {
        setInput({...other, [propName]: event.target.value});
        console.log(input, ...other);
    }

    return (
        <>
        <Grid container direction="row" justify="space-evenly" alignItems="stretch">
            <Card component="form" className={classes.paper}>
                <Typography gutterBottom variant="h5" component="h2">Create Account Here</Typography>
                <Form items = {formItems} onChange = {handleInput} />
                <Grid container direction="row" justify="space-evenly" alignItems="stretch">
                    <Button variant="outlined" className={clsx(classes.margin, classes.button)} href="/" startIcon={<ChevronLeftSharpIcon />} >Sign in instead</Button>
                    <Button variant="outlined" className={clsx(classes.margin, classes.button)} onClick={() => { dialogboxRef.current.handleClickOpen() }} endIcon={<ChevronRightSharpIcon />} >Register</Button>
                </Grid>
            </Card>

        </Grid>
        <Dialogbox ref={dialogboxRef} elementValue={props.input} />
        </>
    )
}

export default SignUp2;