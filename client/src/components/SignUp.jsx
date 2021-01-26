import React from 'react';

import {
    Grid,
    FormControlLabel,
    TextField,
    Typography,
    Button,
    Paper,
    Dialog,
    DialogTitle,
    DialogActions,
    DialogContent,
    DialogContentText,
    Snackbar,
    Checkbox
} from '@material-ui/core';

import useStyles from '../customStyles';

export default function SignUp() {
    //Inputs
    const [values, setValues] = React.useState({
        firstName: '',
        middleName: '',
        lastName: '',
        email: '',
        username: '',
        password: '',
        role: '',
        authority: '',
        acceptTerms: ''
    });

    const handleChange = (event) => {
        event.preventDefault();
        setValues({[event.target.name]: event.target.value});
    }

    //Register
    const [dialog, setDialog] = React.useState(false);

    const handleClick = () => {        
        setDialog(!dialog);
    }

    const handleDisagree = () => {
        setDialog(!dialog);
    }

    //Checkbox
    const [checked, setChecked] = React.useState({
        admin: false
    });

    const handleCheck = event => {
      setChecked({[event.target.name]: event.target.checked});
    };

    //Snackbar
    const [snack, setSnack] = React.useState(false);

    const handleAgree = (event) => {
        setDialog(!dialog);

        event.preventDefault();
        const requestOptions = {
            credentials: 'include',
            mode: 'cors',
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values),
        };

        console.log(values.firstName);
        
        fetch('http://localhost:5000/api/v1/users/registration', requestOptions)
        .then(res => res.json())
        .then(data => {
            setSnack(!snack);
        })
        .catch(err => {
            console.log('There has been a problem with your fetch operation: ' + err);
        });
    }

    const handleClose = () => {
        setSnack(!snack);
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
                    <TextField
                    id="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    variant="outlined"
                    margin="dense"
                    type="password"
                    label="Password" />
                    <FormControlLabel
                    control={<Checkbox checked={checked.admin} onChange={handleCheck} name="admin" size="small" />}
                    label="User"
                    />
                </Grid>
                <Grid container direction="row" justify="space-evenly" alignItems="center" spacing={0} style={{marginTop: '2vh'}}>
                        <Button variant="outlined" className={classes.buttonWhite} href="/">Already have an account?</Button>
                        <Button variant="contained" className={classes.buttonBlue} onClick={handleClick}>Register</Button>
                </Grid>
            </Paper>
        </Grid>
        <Dialog open={dialog}>
            <DialogTitle>Terms and Conditions</DialogTitle>
            <DialogContent>
                <DialogContentText>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic commodi, consequatur molestias ratione aperiam facilis laborum maiores beatae. Aliquid alias amet veniam quibusdam harum quaerat consequatur ut veritatis facere qui!</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button className={classes.buttonWhite} onClick={handleDisagree}>Disagree</Button>
                <Button className={classes.buttonBlue} onClick={handleAgree}>Agree</Button>
            </DialogActions>
        </Dialog>
        <Snackbar
        anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
        open={snack}
        message="User Account Created!"
        autoHideDuration={3000}
        onClose={handleClose}
        />
        <Snackbar
        anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
        open={snack}
        message="Error encountered"
        autoHideDuration={3000}
        onClose={handleClose}
        />
        </>
    );
}