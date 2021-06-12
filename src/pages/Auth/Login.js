import React, {useEffect, useState} from 'react';
import UserLogin from "../../components/Auth/UserLogin";
import APIS from "../../constants/EndPoint";
import usePostHookNoAuth from "../../customHooks/usePostHookNoAuth";
import {setKey} from "../../helpers/sessionKey";
import {useHistory} from "react-router";

const Login = (props) => {
  const url = APIS.LOGIN
  const history = useHistory()
  const [isPostLoading, mutate, isPostSuccess, postData, isPostError, successMsg, errorMsg] = usePostHookNoAuth()
  const handleLogin = async (values) => {
    const formData = {...values}
    try {
      await mutate({url, formData})
    } catch (e) {
      history.push('/login')
      console.log(e)
    }
  };

  useEffect(() => {
    if (postData?.status === 200) {
      const userAuth = {
        accessToken: postData.data.access,
        refreshToken: postData.data.refresh
      };
      setKey("userAuth", JSON.stringify(userAuth))
      setKey("user", JSON.stringify(postData.data.user))
      history.push('/')
    } else {
      history.push('/login')
    }

  }, [history, postData])

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