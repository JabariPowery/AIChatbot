import { useState, useRef } from "react";
import { motion } from "motion/react";
import { NavLink } from "react-router-dom";
import classes from "./Tabs.module.css";

export const SlidingTabs = () => {
  const [position, setPosition] = useState({
    top: 0,
    width: 0,
    opacity: 0,
  });

  const [positionUnderline, setPositionUnderline] = useState({
    top: 0,
    width: 0,
    opacity: 0,
  });

  // var tabs = [
  //   { tabName: "Overview", tabRoute: "" },
  //   { tabName: "Guests", tabRoute: "/guests" },
  //   // { tabName: "Test", tabRoute: "/test"}
  // ];

  return (
    <ul className={classes.list}>
      <Tab
        setPosition={setPosition}
        setPositionUnderline={setPositionUnderline}>
        <NavLink
          to=""
          className={({ isActive }) => (isActive ? classes.active : undefined)}>
          Overview
        </NavLink>
      </Tab>
      <Tab
        setPosition={setPosition}
        setPositionUnderline={setPositionUnderline}>
        <NavLink
          to="/guests"
          className={({ isActive }) => (isActive ? classes.active : undefined)}>
          Guests
        </NavLink>
      </Tab>
      <Cursor position={position} />
      <Underline positionUnderline={positionUnderline} />
    </ul>
  );
};

export const Tab = ({ setPosition, setPositionUnderline, children }) => {
  const ref = useRef(null);

  return (
    <>
      <li
        ref={ref}
        onMouseOver={() => {
          if (!ref.current) return;

          const { width } = ref.current.getBoundingClientRect();

          setPosition({
            width,
            top: ref.current.offsetTop,
          });
        }}
        onClick={() => {
          if (!ref.current) return;

          const { width } = ref.current.getBoundingClientRect();

          setPositionUnderline({
            width,
            top: ref.current.offsetTop + 29,
            opacity: 1,
          });
        }}>
        {children}
      </li>
      {/* <motion.li /> */}
    </>
  );
};

const Cursor = ({ position }) => {
  return <motion.li animate={position} className={classes.float} />;
};

const Underline = ({ positionUnderline }) => {
  return (
    <motion.li
      animate={positionUnderline}
      className={classes.underline}
      layoutId="underline"
    />
  );
};
