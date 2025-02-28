import { Outlet } from "react-router-dom";
import MainNavigation from "./MainNavigation";
import classes from "../../../shared/components/index.module.css";

function AdminRootLayout() {
  return (
    <div className={classes.AdminRootContainer}>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AdminRootLayout;
