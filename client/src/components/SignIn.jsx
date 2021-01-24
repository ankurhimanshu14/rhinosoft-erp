import React from 'react';

import {
    Grid,
    Paper,
    TextField,
    Typography,
    Button
} from '@material-ui/core';

import useStyles from '../customStyles';

export default function SignUp() {
    const classes = useStyles();
    return(
        <>
        <Grid container style={{display:'flex', justifyContent: 'center', position: 'relative'}}>
            <Paper variant="outlined" className={classes.paper}>
                <Grid container direction="column" justify="space-evenly" alignItems="stretch" spacing={0}>
                        <Typography gutterBottom variant="h5" component="h2">
                            Sign In
                        </Typography>
                        <TextField variant="outlined" margin="dense" type="text" label="Username" />
                        <TextField variant="outlined" margin="dense" type="password" label="Password" />
                </Grid>
                <Grid container direction="row" justify="space-evenly" alignItems="center" spacing={0} style={{marginTop: '2vh'}}>
                        <Button variant="outlined" className={classes.buttonWhite} href="/users/register">Create Account</Button>
                        <Button variant="contained" className={classes.buttonBlue}>Sign In</Button>
                </Grid>
            </Paper>
        </Grid>
        </>
    );
}