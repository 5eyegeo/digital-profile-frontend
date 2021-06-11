import React, { useEffect, useState } from "react";
import DualListBox from "react-dual-listbox";
import { makeStyles } from "@material-ui/core/styles";
import { InputLabel } from "@material-ui/core";

const StyledDualList = (props) => {
  const { options, selectedOptions, name, onChange, value, ...other } = props;
  const classes = useStyledDualListStyles();

  return (
    <>
      <InputLabel className={classes.labelMarginBotton}>{name}</InputLabel>
      <DualListBox
        className={classes.root}
        name={name}
        options={options}
        selected={selectedOptions}
        value={value}
        onChange={onChange}
        icons={{
          moveLeft: "<",
          moveAllLeft: "<<",
          moveRight: ">",
          moveAllRight: ">>",
        }}
        {...other}
      />
    </>
  );
};

const useStyledDualListStyles = makeStyles((theme) => ({
  root: {
    height: theme.spacing(30),
    marginBottom: theme.spacing(2),
  },
  labelMarginBotton: {
    marginBottom: theme.spacing(),
    marginTop: theme.spacing(),
  },
}));

export default StyledDualList;
