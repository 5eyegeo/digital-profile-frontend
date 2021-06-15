import React from 'react';
import LoginForm from "./LoginForm";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import {Alert} from "@material-ui/lab";
import {Formik} from "formik";
import * as Yup from "yup";


const LoginFormInitialValue = {
  email: "",
  password: "",
};

const formValidation = Yup.object().shape({
  email: Yup.string().required("Username is required"),
  password: Yup.string().required("password is required"),
});


const UserLogin = (props) => {
  const {handleLogin, errorMsg, isPostLoading} = props
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Typography component="span" variant="h4">
            DIGITAL PROFILE SYSTEM
          </Typography>
          <Divider/>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          {errorMsg ?<Alert severity="error">{errorMsg}!</Alert>:''}
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Formik
            initialValues={LoginFormInitialValue}
            validationSchema={formValidation}
            onSubmit={handleLogin}>
            {({values}) => (
              <>
                <LoginForm isPostLoading={isPostLoading}/>
              </>
            )}
          </Formik>
        </Grid>
      </Grid>
    </>
  );
};

export default UserLogin;