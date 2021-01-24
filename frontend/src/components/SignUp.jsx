import React from 'react';

import {
    Grid,
    TextField,
    Typography,
    Button,
    Paper
} from '@material-ui/core';

import useStyles from '../customStyles';

export default function SignUp() {

    const [values, setValues] = React.useState({
        firstName: '',
        middleName: '',
        lastName: '',
        email: '',
        username: '',
        password: ''
    });

    const handleChange = (event) => {
        event.preventDefault();
        setValues({[event.target.name]: event.target.value});
    }

    const handleClick = event => {
        event.preventDefault();
        console.log(values);    
    }

    const classes = useStyles();
    return(
        <>
        <Grid container style={{display:'flex', justifyContent: 'center', position: 'relative'}}>
            <Paper variant="outlined" className={classes.paper}>
                <Grid container direction="column" justify="flex-start" alignItems="stretch" spacing={0}>
                    <Grid item xs={12}>
                        <Typography gutterBottom variant="h5" component="h2">
                            Create Account
                        </Typography>
                    </Grid>
                    <Grid container direction="row" justify="flex-start" alignItems="space-between" spacing={1}>
                        <Grid item xs={4}>
                            <TextField
                            id="firstName"
                            name="firstName"
                            value={values.firstName}
                            onChange={handleChange}
                            variant="outlined"
                            margin="dense"
                            type="text"
                            label="First Name" />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                            id="middleName"
                            name="middleName"
                            value={values.middleName}
                            onChange={handleChange}
                            variant="outlined"
                            margin="dense"
                            type="text"
                            label="Middle Name" />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                            id="lastName"
                            name="lastName"
                            value={values.lastName}
                            onChange={handleChange}
                            variant="outlined"
                            margin="dense"
                            type="text"
                            label="Last Name" />
                        </Grid>
                    </Grid>
                    <TextField
                    id="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    variant="outlined"
                    margin="dense"
                    type="email"
                    label="Email" />
                    <TextField
                    id="username"
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                    variant="outlined"
                    margin="dense"
                    type="text"
                    label="Username" />
                    <Grid container direction="row" justify="flex-start" alignItems="space-between" spacing={1}>
                        <Grid item xs={6}>
                            <TextField
                            id="password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            variant="outlined"
                            margin="dense"
                            type="password"
                            label="Password" />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                            id="confirmPassword"
                            name="confirmPassword"
                            variant="outlined"
                            margin="dense"
                            type="password"
                            label="Confirm Password" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container direction="row" justify="space-evenly" alignItems="center" spacing={0} style={{marginTop: '2vh'}}>
                        <Button variant="contained" className={classes.buttonWhite} href="/">Already have an account?</Button>
                        <Button variant="contained" className={classes.buttonBlue} onClick={handleClick}>Register</Button>
                </Grid>
            </Paper>
        </Grid>
        </>
    );
}