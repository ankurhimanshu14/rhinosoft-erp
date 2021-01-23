import React from 'react';

import {
    FormControl,
    InputLabel,
    OutlinedInput,
    Grid,
    Typography,
    Button,
} from '@material-ui/core';

import useStyles from '../customStyles';

export default function SignIn() {
    const classes = useStyles()
    return(
        <>
        <Grid container className={classes.grid} spacing={5} direction="column" alignItems="center" justify="center">
            <Grid item xs={12}>
            <Typography gutterBottom variant="h5" component="h2">
                Sign In
            </Typography>
            </Grid>
            <Grid item xs={3}>
                <FormControl fullWidth className={classes.margin} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-username">Username</InputLabel>
                    <OutlinedInput
                        type="text"
                        margin="dense"
                        id="outlined-adornment-username"
                        // value={values.amount}
                        // onChange={handleChange('amount')}
                        // startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        labelWidth={75}
                    />
                </FormControl>
            </Grid>
            <Grid item xs={3}>
            <FormControl fullWidth className={classes.margin} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                    type="password"
                    margin="dense"
                    id="outlined-adornment-password"
                    // value={values.amount}
                    // onChange={handleChange('amount')}
                    // startAdornment={<InputAdornment position="start">$</InputAdornment>}
                    labelWidth={75}
                />
            </FormControl>
            </Grid>
            <Grid item xs={12}>
            <Button size="small" style={{textTransform: 'none'}} color="primary">
                Forgot password?
            </Button>

            </Grid>
            <Grid container spacing={0} direction="row" alignItems="center" justify="center">
            <Grid item xs={2}>
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