import React from 'react';

import {
    Grid,
    TextField,
    Typography,
    Button
} from '@material-ui/core';

import useStyles from '../customStyles';

export default function SignUp() {
    const classes = useStyles();
    return(
        <>
        <Grid container direction="column" spacing={0} direction="column" alignItems="center" justify="center">
            <Grid item xs={6}>
            <Typography gutterBottom variant="h5" component="h2">
                Create Account Here
            </Typography>
            </Grid>
            <Grid item spacing={3} direction="column">
                <Grid item xs={6}>
                    <TextField variant="outlined" label="First Name" margin="dense" />
                    <TextField variant="outlined" label="Last Name" margin="dense" />
                </Grid>
                <Grid item xs={6}>
                <TextField variant="outlined" label="Email ID" margin="dense" />
                </Grid>
                <Grid item xs={6}>
                <TextField variant="outlined" label="Username" margin="dense" />
                </Grid>
                <Grid item spacing={3} direction="row">
                <TextField type="password" variant="outlined" label="Password" margin="dense" />
                <TextField type="password" variant="outlined" label="Confirm Password" margin="dense" />
                </Grid>
            </Grid>
            <Grid container spacing={2} direction="row" alignItems="center" justify="center">
            <Grid item xs={2}>
            <Button size="small" color="primary" style={{textTransform: 'none'}} href="/">
                Already have an account?
            </Button>
            </Grid>
            <Grid item xs={0}>
            <Button variant="contained" size="small" color="primary" className={classes.button}>
                Register
            </Button>
            </Grid>
            </Grid>
        </Grid>
        </>
    );
}