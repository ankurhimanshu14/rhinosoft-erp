import {forwardRef, useState, useImperativeHandle } from 'react';

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

import useStyles from '../customStyles';
import ThumbDownSharpIcon from '@material-ui/icons/ThumbDownSharp';
import ThumbUpSharpIcon from '@material-ui/icons/ThumbUpSharp';

const Dialogbox = forwardRef((props, ref) => {
    const classes = useStyles();
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    
    const [open, setOpen] = useState(false);

    const handleDisagree = () => {
        setOpen(false);
    };

    const handleAgree = () => {
        setOpen(false);
        console.log(props.input)
    };

    useImperativeHandle(
        ref,
        () => ({
            handleClickOpen() {
                setOpen(true)
            }
        })
    )
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