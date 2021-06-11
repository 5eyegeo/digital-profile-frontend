import React from 'react';
import {useMutation, useQueryClient} from 'react-query';
import useSuccessMsg from "./useSuccessMsg";
import useErrorMsg from "./useErrorMsg";
import {deleteApiData} from "../helpers/AxiosInstance";


const useDeleteHook = ({queryKey}) => {
  //  Getting cached data from queryClient
  const queryClient = useQueryClient();

  const [successMsg, setSuccessMsg] = useSuccessMsg();
  const [errorMsg, setErrorMsg] = useErrorMsg();
  const {isLoading, mutate, isSuccess, data, isError} = useMutation(deleteApiData, {
    onSuccess: data => {
      if (data.success) {
        setSuccessMsg(data.message);
      }
    },
    onError: error  => {
      const err = error.request.response;
      setErrorMsg(err.message);
    },
    onSettled: () => {
      //  When the mutation succeeds, invalidate or re-render queries with provided queryKey
      //  (or re-render particular component)
     const promise =  queryClient.invalidateQueries(queryKey);
    },
  });
  return [isLoading, mutate, isSuccess, data, isError];
};

export default useDeleteHook;