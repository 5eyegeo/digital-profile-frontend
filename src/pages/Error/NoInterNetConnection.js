import React, {useEffect} from 'react';
import {useHistory} from "react-router";

const NoInterNetConnection = (props) => {
  const history = useHistory()

  useEffect(() => {
    if (navigator.onLine) {
      history.push('/')
    }
  }, []);

  return (
    <>
      <h1>No Internet Connections</h1>
    </>
  );
};

export default NoInterNetConnection;