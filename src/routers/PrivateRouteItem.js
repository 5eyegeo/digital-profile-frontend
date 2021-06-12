import Dashboard from "../pages/Dashboard";
import Group from "../pages/Account/Group";
import GroupDetail from "../pages/Account/GroupDetail";
import User from "../pages/Account/User";
import Settings from "../pages/Settings";
import AccountProfile from "../pages/Account/AccountProfile";
import Profile from "../pages/Account/Profile";


const PrivateRouteItem = [
  {
    path: "/",
    component: Dashboard
  },
  {
    path: "/groups",
    component: Group
  },
  {
    path: "/group-detail/:groupID",
    component: GroupDetail
  },
  {
    path: "/users",
    component: User
  },
  {
    path: "/users/profile/:userID",
    component: AccountProfile
  },
  {
    path: "/profile/",
    component: Profile
  },
  {
    path: "/settings",
    component: Settings
  },
]
export default PrivateRouteItem