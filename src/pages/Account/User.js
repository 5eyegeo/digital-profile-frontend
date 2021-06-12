import React from 'react';
import APIS from "../../constants/EndPoint";
import useGetHook from "../../customHooks/useGetHook";
import UserList from "../../components/Account/User/UserList";
import AccessControl from "../../helpers/AccessControl";

const User = (props) => {
  const userURL = APIS.USER_LIST
  const userQueryKey = 'userList'
  const [isLoading, isError, data, isSuccess] = useGetHook({queryKey: userQueryKey, url: APIS.USER_LIST})
  const permissionQueryKey = 'UserPermissions'
  // const [isLoading, isError, data, isSuccess] = useGetHook({permissionQueryKey, url})
  console.log(data)
  return (
    <>
      <AccessControl allowedPermissions={[]}>
        <UserList isLoading={isLoading} userData={data}/>
      </AccessControl>
    </>
  );
};

export default User;