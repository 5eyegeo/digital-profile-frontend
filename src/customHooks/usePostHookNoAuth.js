import {useMutation} from 'react-query';
import {postApiDataNoAuth} from "../helpers/AxiosInstance";
import useErrorMsg from "./useErrorMsg";
import useSuccessMsg from "./useSuccessMsg";

const usePostHook = () => {
  const [successMsg, setSuccessMsg] = useSuccessMsg();
  const [errorMsg, setErrorMsg] = useErrorMsg();
  const {
    isLoading: isPostLoading,
    mutate,
    isSuccess: isPostSuccess,
    data: postData,
    isError: isPostError
  } = useMutation(postApiDataNoAuth, {
    onSuccess: data => {
      console.log(data)
      // if (data.success === true) {
      //   setSuccessMsg(data.message);
      // }
    },
    onError: error => {
      const err = JSON.parse(error.request.response)
      setErrorMsg(err.message);
    }
  });
  return [isPostLoading, mutate, isPostSuccess, postData, isPostError, successMsg, errorMsg]
};

export default usePostHook;