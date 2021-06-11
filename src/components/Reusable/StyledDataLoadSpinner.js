import React from 'react';
import {CircularProgress} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const StyledDataLoadSpinner = (props) => {
  return (
    <>
      <Grid item xs={12} style={{textAlign: "center"}}>
        <CircularProgress color="primary"/>
      </Grid>
    </>
  );
};

export default StyledDataLoadSpinner;