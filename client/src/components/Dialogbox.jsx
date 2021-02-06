import {forwardRef, useState, useImperativeHandle, useEffect, useCallback, useRef } from 'react';

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

import Snack from './Snack';

import ThumbDownSharpIcon from '@material-ui/icons/ThumbDownSharp';
import ThumbUpSharpIcon from '@material-ui/icons/ThumbUpSharp';

import useStyles from '../customStyles';

const Dialogbox = forwardRef((props, ref) => {
    const classes = useStyles();
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const snackRef = useRef();
    
    //DIALOG BOX
    const [open, setOpen] = useState(false);

    const [message, setMessage] = useState(null);

    const handleDisagree = () => {
        setOpen(false);
    };

    useImperativeHandle(
        ref,
        () => ({
            handleClickOpen() {
                setOpen(true)
            }
        })
    )

    const handleAgree = useCallback(async () => {
      const requestOptions = {
        credentials: 'include',
        mode: 'cors',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(props.elementValue),
      };
    
      await fetch('http://localhost:5000/api/v1/users/register', requestOptions)
      .then(res => res.text())
      .then(() => {
        setMessage('New User Added: ' + props.elementValue.fullName);
      })
      .catch(err => {
        setMessage('There has been a problem with your fetch operation: ' + err);
      });
      setOpen(false);
      snackRef.current.handleSnackOpen()
    },[props]);

    useEffect(() => {
    }, [handleAgree]);

    return(
      <>
        <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleDisagree}
        aria-labelledby="TnC"
        >
        <DialogTitle id="TnC">{"Terms and Conditions"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Explicabo accusamus velit autem quo dolore quaerat eaque ex 
            saepe asperiores veniam, in delectus animi repudiandae eveniet 
            alias, voluptatem earum facilis voluptas.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus variant="oultined" className={clsx(classes.margin, classes.button)} onClick={handleDisagree} startIcon={<ThumbDownSharpIcon />} >Disagree</Button>
          <Button autoFocus variant="outlined" className={clsx(classes.margin, classes.button)} onClick={handleAgree} endIcon={<ThumbUpSharpIcon />} >Agree</Button>
        </DialogActions>
      </Dialog>
      <Snack ref={snackRef} elementValue = {message} />
      </>
    )
})

export default Dialogbox;