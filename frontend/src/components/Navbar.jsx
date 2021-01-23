import React from 'react';

import {
    makeStyles,
    AppBar,
    Toolbar,
    IconButton,
    Typography
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
    toolbar: {
        backgroundColor: '#1a73e8',
        color: '#ffffff'
    },
    icon: {
        backgroundColor: '#1a73e8',
        color: '#ffffff'
    }
})

export default function Navbar() {
    const classes = useStyles();
    return(
        <>
        <AppBar position="sticky">
            <Toolbar className={classes.toolbar} variant="dense">
                <IconButton className={classes.icon}>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h5" component="h2">
                    MWS+
                </Typography>
            </Toolbar>
        </AppBar>
        </>
    )
}