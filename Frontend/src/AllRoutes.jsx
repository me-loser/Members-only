import { Navigate, Route, Routes } from "react-router-dom";
import SigninPage from "./components/auth/SigninPage";
import GroupsListPage from "./components/groups/GroupsListPage";
import GroupPage from "./components/groups/GroupPage";
import CreateGroupPage from "./components/groups/CreateGroupPage";
import PrivateRoute from "./components/auth/PrivateRoute";

const routes = [
  {
    path: "/",
    Component: GroupsListPage,
    private: true,
    exact: true,
  },
  {
    path: "/groups/:id",
    private: true,
    Component: GroupPage,
  },
  {
    path: "/sign-in",
    Component: SigninPage,
  },
  {
    path: "/create-group",
    private: true,
    Component: CreateGroupPage,
  },
];
export const AllRoutes = ({ isLoading, user }) => (
  <Routes>
    {routes.map((route, index) => {
      return (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          element={
            route.private ? (
              <PrivateRoute
                isLoading={isLoading}
                isAuthed={!!user}
                Component={route.Component}
              />
            ) : (
              <route.Component></route.Component>
            )
          }
        ></Route>
      );
    })}
  </Routes>
);
