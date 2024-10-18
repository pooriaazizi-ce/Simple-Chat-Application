// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
import ChatDashboard from "layouts/chatDashborad";
import Tables from "layouts/tables";
import Billing from "layouts/billing";
import RTL from "layouts/rtl";
import Notifications from "layouts/notifications";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";

import DashboardIcon from "@mui/icons-material/Dashboard";
import BackupTableIcon from "@mui/icons-material/BackupTable";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import FormatTextdirectionRToLIcon from "@mui/icons-material/FormatTextdirectionRToL";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { lime } from "@mui/material/colors";

// @mui icons
import Icon from "@mui/material/Icon";

const routes = [
  // Chat Application Components
  {
    type: "collapse",
    name: "داشبورد",
    key: "dashboard",
    icon: <DashboardIcon />,
    route: "/dashboard",
    component: <ChatDashboard />,
  },

  // Templates
  // {
  //   type: "collapse",
  //   name: "Dashboard",
  //   key: "dashboard2",
  //   icon: <FileDownloadIcon />,
  //   route: "/dashboard2",
  //   component: <Dashboard />,
  // },
  // {
  //   type: "collapse",
  //   name: "Tables",
  //   key: "tables",
  //   icon: <BackupTableIcon />,
  //   route: "/tables",
  //   component: <Tables />,
  // },
  // {
  //   type: "collapse",
  //   name: "Billing",
  //   key: "billing",
  //   icon: <AttachMoneyIcon />,
  //   route: "/billing",
  //   component: <Billing />,
  // },
  // {
  //   type: "collapse",
  //   name: "RTL",
  //   key: "rtl",
  //   icon: <FormatTextdirectionRToLIcon />,
  //   route: "/rtl",
  //   component: <RTL />,
  // },
  // {
  //   type: "collapse",
  //   name: "Notifications",
  //   key: "notifications",
  //   icon: <NotificationsIcon />,
  //   route: "/notifications",
  //   component: <Notifications />,
  // },
  // {
  //   type: "collapse",
  //   name: "Profile",
  //   key: "profile",
  //   icon: <AccountBoxIcon />,
  //   route: "/profile",
  //   component: <Profile />,
  // },

  // Authentication
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    icon: <ExitToAppIcon />,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    icon: <LockOpenIcon />,
    route: "/authentication/sign-up",
    component: <SignUp />,
  },
];

export default routes;
