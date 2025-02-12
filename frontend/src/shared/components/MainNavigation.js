import classes from "./MainNavigation.module.css";
import { motion } from "motion/react";
import { SlidingTabs } from "./Tabs";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <SlidingTabs />
      </nav>
    </header>
  );
}

export default MainNavigation;
