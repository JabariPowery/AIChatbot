import { Outlet } from "react-router-dom";
import MainNavigation from "./MainNavigation";
import classes from "./index.module.css";

function RootLayout() {
  return (
    <div className={classes.RootContainer}>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
