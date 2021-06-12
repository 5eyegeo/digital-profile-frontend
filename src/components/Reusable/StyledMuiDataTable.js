import React from 'react';
import Grid from "@material-ui/core/Grid";
import StyledDataLoadSpinner from "./StyledDataLoadSpinner";
import MUIDataTable from "mui-datatables";

const StyledMuiDataTable = ({isLoading, columns, options, data, title}) => {

  return (
    <>
      <Grid container spacing={3} style={{textAlign: "left"}}>
        {isLoading ? <StyledDataLoadSpinner/> : (
          <Grid item xs={12}>
            <MUIDataTable
              title={title}
              data={data}
              columns={columns}
              options={options}
            />
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default StyledMuiDataTable;