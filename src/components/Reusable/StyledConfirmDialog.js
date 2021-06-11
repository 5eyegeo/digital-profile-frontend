import React from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  makeStyles,
  IconButton,
  CircularProgress
} from '@material-ui/core'
import NotListedLocationIcon from '@material-ui/icons/NotListedLocation';
import StyledButton from "./StyledButton";


const useStyles = makeStyles(theme => ({
  dialog: {
    padding: theme.spacing(2),
    position: 'absolute',
    top: theme.spacing(5)
  },
  dialogTitle: {
    textAlign: 'center'
  },
  dialogContent: {
    textAlign: 'center'
  },
  dialogAction: {
    justifyContent: 'center'
  },
  titleIcon: {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.secondary.main,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
      cursor: 'default'
    },
    '& .MuiSvgIcon-root': {
      fontSize: '8rem',
    }
  }
}))

export default function StyledConfirmDialog(props) {

  const {confirmDialog, setConfirmDialog, isDataDeleting} = props;
  const classes = useStyles()

  return (
    <Dialog open={confirmDialog.isOpen} classes={{paper: classes.dialog}}>
      <DialogTitle className={classes.dialogTitle}>
        <IconButton disableRipple className={classes.titleIcon}>
          <NotListedLocationIcon/>
        </IconButton>
      </DialogTitle>
      <DialogContent className={classes.dialogContent}>
        <Typography variant="h6">
          {confirmDialog.title}
        </Typography>
        <Typography variant="subtitle2">
          {confirmDialog.subTitle}
        </Typography>
      </DialogContent>
      <DialogActions className={classes.dialogAction}>
        {isDataDeleting ? (<CircularProgress/>) : (
          <>
            <StyledButton
              text="No"
              color="default"
              onClick={() => setConfirmDialog({...confirmDialog, isOpen: false})}/>
            <StyledButton
              text="Yes"
              color="secondary"
              onClick={confirmDialog.onConfirm}
            />
          </>
        )}
      </DialogActions>
    </Dialog>
  )
}