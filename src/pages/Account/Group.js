import React from 'react';
import GroupList from "../../components/Account/Group/GroupList";
import APIS from "../../constants/EndPoint";
import useGetHook from "../../customHooks/useGetHook";

const Group = (props) => {
  const userQueryKey = 'groupList'
  const [isLoading, isError, data, isSuccess] = useGetHook({queryKey: userQueryKey, url: APIS.GROUP_LIST})
  const permissionQueryKey = 'groupPermissions'
  // const [isLoading, isError, data, isSuccess] = useGetHook({permissionQueryKey, url})
  return (
    <>
      <GroupList
        groupData={data}
        isDataLoading={isLoading}
      />
    </>
  );
};

export default Group;