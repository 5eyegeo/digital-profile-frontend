import React, {useState} from 'react'
import {Snackbar, makeStyles} from '@material-ui/core';
import {Alert} from '@material-ui/lab';

const useStyles = makeStyles(theme => ({
  root: {
    top: theme.spacing(9)
  }
}))

export default function StyledNotification(props) {
  // const [open, setOpen] = useState(false);
  const {type, message, openSnackBar, setOpenSnackBar} = props;

  const classes = useStyles()

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackBar(false);
  };


  return (
    <Snackbar
      className={classes.root}
      open={openSnackBar}
      autoHideDuration={3000}
      anchorOrigin={{vertical: 'top', horizontal: 'right'}}
      onClose={handleClose}>
      <Alert
        severity={type}
        onClose={handleClose}>
        {message}
      </Alert>
    </Snackbar>
  )
}