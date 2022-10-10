import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Routes, Route, Outlet, useNavigate, Navigate } from "react-router-dom";
import RequireAuth from "../Components/RequireAuth";
import { menuNavigator } from "../config/menu";
import { PrivateRouteNavigator } from "../config/privateMenu";
import { PublicRouteNavigator } from "../config/publicMenu";
import {
  selectIsUserLogged,
  selectLoggedUser,
} from "../store/redux/user/userSlice";
import { verifyCurrentPathName } from "../utils/changeRoute";

/**
 * @description Create Generic Routes.
 */
function CdPageRoute() {
  const isUserLogged = useSelector(selectIsUserLogged);
  const loggedUser = useSelector(selectLoggedUser);
  const pathName = verifyCurrentPathName();
  const navigate = useNavigate();

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Routes>
        {isUserLogged && loggedUser ? (
          <>
            {PrivateRouteNavigator.map((path, index) => {
              if (
                loggedUser.naUserType &&
                path.role.includes(loggedUser.naUserType)
              ) {
                return (
                  <Route
                    key={`${index}-template-auth-key`}
                    element={<RequireAuth isPrivate={path.isPrivate} />}
                  >
                    <Route
                      key={`${index}-template-key`}
                      element={<path.template />}
                    >
                      <Route
                        key={`${index}-component-key`}
                        path={path.path}
                        element={
                          path?.redirectTo &&
                          path?.redirectWhen?.includes(
                            verifyCurrentPathName()
                          ) ? (
                            <Navigate to={path.redirectTo} replace />
                          ) : (
                            <path.component />
                          )
                        }
                      />
                    </Route>
                  </Route>
                );
              }
            })}
          </>
        ) : (
          <>
            {PublicRouteNavigator.map((path, index) => {
              if (path?.path && path?.component)
                return (
                  <Route
                    key={`${index}-public-template-key`}
                    element={<path.template />}
                  >
                    <Route
                      key={`${index}-public-component-key`}
                      path={path.path}
                      element={<path.component />}
                    />
                    <Route
                      key={`${index}-public-component-redirect-key`}
                      path="*"
                      element={<Navigate to="/login" replace />}
                    />
                  </Route>
                );
            })}
          </>
        )}
      </Routes>
    </div>
    // <div style={{ width: "100%", height: "100%" }}>
    //   <Routes>
    //     {menuNavigator.map((path, index) => {
    //       return (
    //         <Route key={`${index}-template-auth`} element={<Outlet />}>
    //           <Route key={`${index}-template-key`} element={<path.template />}>
    //             <Route
    //               key={`${index}-component-key`}
    //               path={path.path}
    //               element={<path.component />}
    //             />
    //           </Route>
    //         </Route>
    //       );
    //     })}
    //   </Routes>
    // </div>
  );
}

export default CdPageRoute;
