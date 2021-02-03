import {forwardRef, useState, useImperativeHandle, useEffect } from 'react';

import clsx from 'clsx';
import {
    Dialog, 
    DialogTitle, 
    DialogContent, 
    DialogContentText, 
    DialogActions, 
    useMediaQuery, 
    Button, 
    useTheme
} from '@material-ui/core';

import ThumbDownSharpIcon from '@material-ui/icons/ThumbDownSharp';
import ThumbUpSharpIcon from '@material-ui/icons/ThumbUpSharp';

import useStyles from '../customStyles';

const Dialogbox = forwardRef((props, ref) => {
    const classes = useStyles();
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    
    //DIALOG BOX
    const [open, setOpen] = useState(false);

    const handleDisagree = () => {
        setOpen(false);
    };

    //SUBMIT FORM DATA
    const handleAgree = () => {
      setOpen(false);
      const requestOptions = {
        credentials: 'include',
        mode: 'cors',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(props.elementValue),
      };
    
      fetch('http://localhost:5000/api/v1/users/register', requestOptions)
      .then(res => res.json())
      .then(data => {
        alert(('New User Added: ' + data.fullName))
      })
      .catch(err => {
          alert('There has been a problem with your fetch operation: ' + err);
      });        
    };

    useImperativeHandle(
        ref,
        () => ({
            handleClickOpen() {
                setOpen(true)
            }
        })
    )

    useEffect(() => {
      handleAgree()
    }, []);

    return(
        <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleDisagree}
        aria-labelledby="responsive-dialog-title"
        >
        <DialogTitle id="responsive-dialog-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus variant="oultined" className={clsx(classes.margin, classes.button)} onClick={handleDisagree} startIcon={<ThumbDownSharpIcon />} >Disagree</Button>
          <Button autoFocus variant="outlined" className={clsx(classes.margin, classes.button)} onClick={handleAgree}  endIcon={<ThumbUpSharpIcon />} >Agree</Button>
        </DialogActions>
      </Dialog>
    )
})

export default Dialogbox;