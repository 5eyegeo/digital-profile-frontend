import React from 'react';
import {CircularProgress} from "@material-ui/core";

const StyledDataAddLoader = (props) => {
  const {size} = props
  return (
    <>
      <CircularProgress color={"secondary"} size={size || '25px'}/>
    </>
  );
};

export default StyledDataAddLoader;