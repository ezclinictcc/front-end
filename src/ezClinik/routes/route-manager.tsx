import { useEffect } from "react";
import { Routes, Route, Outlet, useNavigate } from "react-router-dom";
import { menuNavigator } from "../config/menu";
import { verifyCurrentPathName } from "../utils/changeRoute";

/**
 * @description Create Generic Routes.
 */
function CdPageRoute() {
  const pathName = verifyCurrentPathName();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathName === "/") {
      navigate("/login");
    }
  }, [pathName, navigate]);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Routes>
        {menuNavigator.map((path, index) => {
          return (
            <Route key={`${index}-template-auth`} element={<Outlet />}>
              <Route key={`${index}-template-key`} element={<path.template />}>
                <Route
                  key={`${index}-component-key`}
                  path={path.path}
                  element={<path.component />}
                />
              </Route>
            </Route>
          );
        })}
      </Routes>
    </div>
  );
}

export default CdPageRoute;
