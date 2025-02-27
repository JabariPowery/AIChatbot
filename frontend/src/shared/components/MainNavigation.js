import classes from "./MainNavigation.module.css";
import Tabs from "./Tabs";
function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <Tabs />
      </nav>
    </header>
  );
}

export default MainNavigation;
