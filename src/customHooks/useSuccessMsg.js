import React, {useState} from 'react';

const useSuccessMsg = () => {
  const [successMsg, setSuccessMsg] = useState("");
  return [successMsg, setSuccessMsg]
};

export default useSuccessMsg;