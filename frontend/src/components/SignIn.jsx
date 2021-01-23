import React from 'react';

import {
    Grid,
    TextField,
    Typography,
    Button
} from '@material-ui/core';

export default function SignIn() {
    return(
        <>
        <Grid container direction="column" spacing={6}>
            <Grid item xs={6}>
            <Typography gutterBottom variant="h5" component="h2">
                Sign In
            </Typography>
            </Grid>
            <Grid item xs={6}>
                <TextField variant="outlined" label="Username" margin="dense" />
                <TextField variant="outlined" label="Password" margin="dense" />
            </Grid>
            <Grid item xs={6}>
            <Button size="small" color="primary">
                Create Account
            </Button>
            <Button size="small" color="primary">
                sign in
            </Button>
            <Button size="small" style={{textTransform: 'none'}} color="primary">
                forgot password?
            </Button>
            </Grid>
        </Grid>
        </>
    );
}