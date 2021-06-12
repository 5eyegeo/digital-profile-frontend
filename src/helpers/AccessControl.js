import {getKey} from "./sessionKey";

const user = JSON.parse(getKey('user'));

const checkPermissions = (allowedPermissions) => {
  if (allowedPermissions.length === 0) {
    return true;
  }
  return user.permissions.some(permission =>
    allowedPermissions.includes(permission['codename'])
  );
};

const AccessControl = ({allowedPermissions, children, renderNoAccess,}) => {
  const permitted = checkPermissions(allowedPermissions);
  if (permitted) {
    return children;
  }
  return renderNoAccess();
};

AccessControl.defaultProps = {
  allowedPermissions: [],
  permissions: [],
  renderNoAccess: () => null,
};

export default AccessControl;