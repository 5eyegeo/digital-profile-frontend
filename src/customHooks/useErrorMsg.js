import React, {useState} from 'react';

const useErrorMsg = () => {
  const [errorMsg, setErrorMsg] = useState("");
  return [errorMsg, setErrorMsg];
};

export default useErrorMsg;