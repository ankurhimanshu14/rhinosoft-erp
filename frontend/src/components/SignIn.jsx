import React from 'react';

import {
    Grid,
    TextField,
    Typography,
    Button,
} from '@material-ui/core';

import useStyles from '../customStyles';

export default function SignIn() {
    const classes = useStyles()
    return(
        <>
        <Grid container spacing={0} direction="column" alignItems="center" justify="center" style={{height: 'auto'}}>
            <Grid item xs={3}>
            <Typography gutterBottom variant="h5" component="h2">
                Sign In
            </Typography>
            </Grid>
            <Grid item xs={3}>
                <TextField variant="outlined" label="Username" margin="dense" />
                </Grid>
            <Grid item xs={3}>
                <TextField type="password" variant="outlined" label="Password" margin="dense" />
            </Grid>
            <Grid item xs={3}>
            <Button size="small" style={{textTransform: 'none'}} color="primary">
                Forgot password?
            </Button>

            </Grid>
            <Grid container spacing={2} direction="row" alignItems="center" justify="center">
            <Grid item xs={1}>
            <Button size="small" style={{textTransform: 'none'}} color="primary" href="/users/register">
                Create Account
            </Button>
            </Grid> 
            <Grid item xs={0}>
            <Button className={classes.button} size="small" variant="contained">
                Sign In
            </Button>
            </Grid>
            </Grid>
        </Grid>
        </>
    );
}