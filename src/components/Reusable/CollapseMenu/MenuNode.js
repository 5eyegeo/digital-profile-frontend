import { makeStyles } from "@material-ui/core";
import React from "react";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { NavLink } from "react-router-dom";
import Icon from "@material-ui/core/Icon";

const MenuNode = (props) => {
  const { nested, subNested } = props;
  const classes = useMenuNodeStyles();
  const { name, icon, link } = props.data;
  let nestedClass = "";
  if (nested) {
    nestedClass = classes.nested;
  }

  if (subNested) {
    nestedClass = classes.subNested;
  }
  return (
    <>
      <ListItem
        button
        component={NavLink}
        to={link}
        className={nestedClass}
        exact
      >
        {icon && (
          <ListItemIcon>
            <Icon>{icon}</Icon>
          </ListItemIcon>
        )}
        <ListItemText primary={name} />
      </ListItem>
    </>
  );
};

const useMenuNodeStyles = makeStyles((theme) => ({
  nested: {
    paddingLeft: theme.spacing(4),
  },
  subNested: {
    paddingLeft: theme.spacing(6),
  },
}));

export default MenuNode;
