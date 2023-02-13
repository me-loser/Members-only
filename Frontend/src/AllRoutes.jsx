import { Route, Routes } from "react-router-dom";
import SigninPage from "./components/auth/SigninPage";
import GroupsListPage from "./components/groups/GroupsListPage";
import GroupPage from "./components/groups/GroupPage";
import CreateGroupPage from "./components/groups/CreateGroupPage";

const routes = [
  {
    path: "/",
    Component: GroupsListPage,
    exact: true,
  },
  {
    path: "/groups/:id",
    Component: GroupPage,
  },
  {
    path: "/sign-in",
    Component: SigninPage,
  },
  {
    path: "/create-group",
    Component: CreateGroupPage,
  },
];
export const AllRoutes = () => (
  <Routes>
    {routes.map((route, index) => (
      <Route
        key={index}
        path={route.path}
        exact={route.exact}
        element={<route.Component />}
      ></Route>
    ))}
  </Routes>
);
