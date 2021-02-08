import { forwardRef, useImperativeHandle, useState } from 'react';

import {
    Snackbar,
    IconButton
} from '@material-ui/core';

import CloseIcon from '@material-ui/icons/Close';

const Snack = forwardRef((props, ref) => {
    const [snack, setSnack] = useState(false);

    const handleClose = () => {
        setSnack(false);
    }

    useImperativeHandle(
        ref,
        () => ({
            handleSnackOpen() {
                setSnack(true)
            }
        })
    )

    return (
        <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        open={snack}
        autoHideDuration={3000}
        onClose={handleClose}
        message={props.elementValue}
        action={
          <>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </>
        }
      />
    )
})

export default Snack;