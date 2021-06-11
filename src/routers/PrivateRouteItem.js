import {getKey} from "../helpers/sessionKey";
import Dashboard from "../pages/Dashboard/Dashboard";
import Group from "../pages/Account/Groups";
import GroupDetail from "../pages/Account/GroupDetail";
import User from "../pages/Account/Users";
import AccountProfile from "../pages/Account/AccountProfile";
import AccountProfileEdit from "../pages/Account/AccountProfileEdit";
import Profile from "../pages/Auth/Profile";
import Settings from "../pages/Edseed/Settings";
import EmailServer from "../pages/Edseed/EmailServer";



const client = JSON.parse(getKey('client')) || [];

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
    path: "/users/edit/:profileID",
    component: AccountProfileEdit
  },
  {
    path: "/profile/",
    component: Profile
  },
  {
    path: "/settings",
    component: Settings
  },
  {
    path: "/email-server",
    component: EmailServer
  }
]
export default PrivateRouteItem