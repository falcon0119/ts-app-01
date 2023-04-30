import { HomeConst } from "../components/pages/Home";
import { SettingConst } from "../components/pages/Setting";
import { UserManagementConst } from "../components/pages/UserManagement";

export const HomeRouterConst = [
  {
    path: "/",
    element: <HomeConst />,
  },
  {
    path: "/user_management",
    element: <UserManagementConst />,
  },
  {
    path: "/setting",
    element: <SettingConst />,
  },
];
