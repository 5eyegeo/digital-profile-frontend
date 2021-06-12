import React from 'react';
import AccessControl from "../../helpers/AccessControl";
import StyledPermissionDenied from "../../components/Reusable/StyledPermissionDenied";

const Dashboard = (props) => {
  return (
    <>
      <AccessControl
        allowedPermissions={["change_logentry", "delete_logentry"]}
        renderNoAccess={StyledPermissionDenied}
      >
        <h1>Can add Item</h1>
      </AccessControl>
    </>
  );
};

export default Dashboard;