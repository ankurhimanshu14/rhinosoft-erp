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
import CheckBox from '../components/CheckBox';
import Form from '../components/useForm';

const formItems = [
    {
        propName: "fullName",
        label: "Full Name",
        helperText: "Enter full name here",
        helperDescription: "fullName-helper-text",
        type: "text",
        required: true
    },
    {
        propName: "email",
        label: "Email",
        helperText: "Enter email ID here",
        helperDescription: "email-helper-text",
        type: "email",
        required: true
    },
    {
        propName: "username",
        label: "Username",
        helperText: "Username should be unique",
        helperDescription: "username-helper-text",
        type: "text",
        required: true
    },
    {
        propName: "password",
        label: "Password",
        helperText: "Password should contain uppercase letters, lowercase letters, special characters and numbers",
        helperDescription: "password-helper-text",
        type: "password",
        required: true
    }
];

function SignUp(props) {
    const classes = useStyles();

    const dialogboxRef = useRef();

    const [checked, setChecked] = useState({
        role: "User"
    });

    const handleCheck = () => {
        setChecked({role: "Admin"});
    }

    return (
        <>
        <Grid container direction="row" justify="space-evenly" alignItems="stretch">
            <Card component="form" className={classes.paper}>
                <Typography gutterBottom variant="h5" component="h2">Create Account Here</Typography>
                <Form items = {formItems} />
                <CheckBox id="role" label="Role" value={checked} onChange={handleCheck} />
                <Grid container direction="row" justify="space-evenly" alignItems="stretch">
                    <Button variant="outlined" className={clsx(classes.margin, classes.button)} href="/" startIcon={<ChevronLeftSharpIcon />} >Sign in instead</Button>
                    <Button variant="outlined" className={clsx(classes.margin, classes.button)} onClick={() => { dialogboxRef.current.handleClickOpen() }} endIcon={<ChevronRightSharpIcon />} >Register</Button>
                </Grid>
            </Card>
        </Grid>
        <Dialogbox ref={dialogboxRef} elementValue={props} />
        </>
    )
}

export default SignUp;