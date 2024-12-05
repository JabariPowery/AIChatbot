// import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { motion } from "motion/react";
// import Tabs from "./Tabs";
// import NewTabs from "./NewTabs";
import { SlidingTabs } from "./Tabs";

function MainNavigation() {
  // var percentage =

  //   var tabs = [
  //     { tabName: "Overview", tabRoute: "" },
  //     { tabName: "Guests", tabRoute: "/guests" },
  //     // { tabName: "Test", tabRoute: "/test"}
  //   ];

  return (
    <header className={classes.header}>
      <nav>
        {/* <Tabs tabs={tabs}/> */}
        {/* <NewTabs tabs={tabs} /> */}
        <SlidingTabs />
      </nav>
    </header>
  );
}

export default MainNavigation;
