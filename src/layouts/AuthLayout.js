import {makeStyles} from "@material-ui/core";
import React from "react";

const AuthLayout = (props) => {
  const {children} = props;
  const classes = useAuthLayoutStyle();
  return (
    <div className={classes.root}>
      <div className={classes.childrenSection}>{children}</div>
    </div>
  )
};

const useAuthLayoutStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    background: "#444444" /* fallback for old browsers */,
  },
  childrenSection: {
    background: 'white',
    padding: theme.spacing(4),
    borderRadius: theme.spacing(),
    boxShadow: '-2px 2px 20px 0px #b0b0b7',
    width: '100%',
    maxWidth: '500px'
  }
}));

export default AuthLayout;