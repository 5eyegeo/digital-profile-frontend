import React, {useState} from 'react';
import UserLogin from "../../components/Auth/UserLogin";
import APIS from "../../constants/EndPoint";
import usePostHookNoAuth from "../../customHooks/usePostHookNoAuth";

const Login = (props) => {
  const url = APIS.LOGIN
  const [isPostLoading, mutate, isPostSuccess, postData, isPostError, successMsg, errorMsg] = usePostHookNoAuth()
  const handleLogin = async (values) => {
    const formData = {...values}
    try {
      await mutate({url, formData})
    } catch (e) {
      console.log(e)
    }
  };

  return (
    <>
      <UserLogin
        errorMsg={errorMsg}
        isPostLoading={isPostLoading}
        handleLogin={handleLogin}
      />
    </>
  );
};

export default Login;