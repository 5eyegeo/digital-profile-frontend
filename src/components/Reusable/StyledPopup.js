import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  makeStyles,
  Typography,
} from "@material-ui/core";
import StyledButton from "./StyledButton";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  dialogWrapper: {
    padding: theme.spacing(2),
    position: "absolute",
    top: theme.spacing(5),
  },
  dialogTitle: {
    padding: "0px 0px 5px 16px",
    "& .MuiTypography-h6": {
      marginTop: theme.spacing(0.5),
    },
  },
}));

export default function Popup(props) {
  const {title, children, openPopup, setOpenPopup, maxWidth = "sm"} = props;
  const classes = useStyles();

  return (
    <Dialog
      open={openPopup}
      maxWidth={maxWidth}
      disableAutoFocus={true}
      disableEnforceFocus={true}
      classes={{paper: classes.dialogWrapper}}
    >
      <DialogTitle className={classes.dialogTitle}>
        <div style={{display: "flex"}}>
          <Typography variant="h6" component="div" style={{flexGrow: 1}}>
            {title}
          </Typography>
          <StyledButton
            size="small"
            color="secondary"
            onClick={() => {
              setOpenPopup(false);
            }}
            text={<CloseIcon/>}
          />
        </div>
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
    </Dialog>
  );
}
