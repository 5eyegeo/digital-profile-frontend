import React from 'react';
import {useMutation, useQueryClient} from 'react-query';
import {error} from "next/dist/build/output/log";
import useErrorMsg from "./useErrorMsg";
import useSuccessMsg from "./useSuccessMsg";
import {putApiData} from "../helpers/AxiosInstance";

const usePutHook = ({queryKey}) => {

  //getting cached data from queryClient
  const queryClient = useQueryClient();
  const [successMsg, setSuccessMsg] = useSuccessMsg();
  const [errorMsg, setErrorMsg] = useErrorMsg();
  const {
    isLoading: isUpdateLoading,
    mutate,
    isSuccess: isUpdateSuccess,
    data: updateData,
    isError: isUpdateError
  } = useMutation(putApiData, {
    onSuccess: data => {
      if (data.success === true) {
        setSuccessMsg(data.message)
      }
    },
    onError: error => {
      const err = JSON.parse(error.request.response);
      setErrorMsg(err.message);
    },
    onSettled: () => {
      //  When the mutation succeeds, invalidate or re-render queries with provided queryKey
      //  (or re-render particular component)
      const promise = queryClient.invalidateQueries(queryKey);
    },
  });

  return [isUpdateLoading, mutate, isUpdateSuccess, updateData, successMsg, isUpdateError, errorMsg];
};

export default usePutHook;