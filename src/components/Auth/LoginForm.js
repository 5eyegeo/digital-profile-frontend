import React from 'react';
import Grid from "@material-ui/core/Grid";
import StyledTextField from "../Reusable/StyledTextField";
import StyledButton from "../Reusable/StyledButton";
import {CircularProgress} from "@material-ui/core";
import {Form} from "formik";


const LoginForm = (props) => {
  const {isPostLoading} = props
  return (
    <>
      <Form>
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <StyledTextField label="Username/Email/Mobile" name="email" type="text" variant="outlined"/>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <StyledTextField label="Password" name="password" type="password" variant="outlined"/>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <StyledButton
              type="submit"
              text={isPostLoading ? <CircularProgress color="secondary" size={26}/> : ('Login')}
              style={{width: "100%"}}
            />
          </Grid>
        </Grid>
      </Form>
    </>
  );
};

export default LoginForm;