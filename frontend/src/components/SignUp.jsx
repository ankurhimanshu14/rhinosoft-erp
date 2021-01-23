import React from 'react';

import {
    Grid,
    TextField,
    Typography,
    Button
} from '@material-ui/core';

export default function SignUp() {
    return(
        <>
        <Grid container direction="column" spacing={3}>
            <Grid item xs={6}>
            <Typography gutterBottom variant="h5" component="h2">
                Create Account Here
            </Typography>
            </Grid>
            <Grid item spacing={1} direction="column">
                <Grid item xs={6}>
                    <TextField variant="outlined" label="Full Name" margin="dense" />
                </Grid>
                <Grid item xs={6}>
                <TextField variant="outlined" label="Email ID" margin="dense" />
                </Grid>
                <Grid item xs={6}>
                <TextField variant="outlined" label="Username" margin="dense" />
                </Grid>
                <Grid item spacing={3} direction="row">
                <TextField variant="outlined" label="Password" margin="dense" />
                <TextField variant="outlined" label="Confirm Password" margin="dense" />
                </Grid>
            </Grid>
            <Grid item xs={6}>
            <Button size="small" color="primary" style={{textTransform: 'none'}}>
                Already have an account?
            </Button>
            </Grid>
            <Grid item xs={6}>
            <Button size="small" color="primary" style={{textTransform: 'none'}}>
                Register
            </Button>
            </Grid>
        </Grid>
        </>
    );
}