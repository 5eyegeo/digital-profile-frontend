import React from "react";
import {Button, makeStyles} from "@material-ui/core";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 0,
    margin: theme.spacing(0.5),
  },
  secondary: {
    backgroundColor: theme.palette.secondary.light,
    "& .MuiButton-label": {
      color: theme.palette.secondary.main,
    },
  },
  primary: {
    backgroundColor: theme.palette.primary.light,
    "& .MuiButton-label": {
      color: theme.palette.primary.main,
    },
  },
}));

export default function StyledActionButton(props) {
  const {color, children, onClick, link, ...other} = props;
  const classes = useStyles();

  return (
    <Link to={link ? link : '#'}>
      <Button className={`${classes.root} ${classes[color]}`} onClick={onClick} {...other}>
        {children}
      </Button>
    </Link>
  );
}
