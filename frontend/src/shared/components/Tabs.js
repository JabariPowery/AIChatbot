import classes from "./Tabs.module.css";
import { useState, useRef } from "react";
import { motion } from "motion/react";
import { NavLink } from "react-router-dom";

function Tabs() {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const [positionUnderline, setPositionUnderline] = useState({
    left: 0,
    width: 80,
    top: 10,
    opacity: 0,
  });

  const tabs = [
    { route: "", name: "Home" },
    { route: "/guests", name: "Guests" },
  ];

  return (
    <ul className={classes.list}>
      {tabs.map(({ route, name }) => {
        return (
          <Tab
            setPosition={setPosition}
            setPositionUnderline={setPositionUnderline}>
            <NavLink
              to={route}
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }>
              {name}
            </NavLink>
          </Tab>
        );
      })}
      <Cursor position={position} />
      <Underline positionUnderline={positionUnderline} />;
    </ul>
  );
}

export const Tab = ({ setPosition, setPositionUnderline, children }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseOver={() => {
        if (!ref.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          width,
          left: ref.current.offsetleft,
        });
      }}
      onClick={() => {
        if (!ref.current) return;

        // const { width } = ref.current.getBoundingClientRect();

        setPositionUnderline({
          width: 80,
          left: ref.current.offsetLeft + 30,
          top: 10,
          opacity: 1,
        });
      }}>
      {children}
    </li>
  );
};

const Cursor = ({ position }) => (
  <motion.li animate={position} className={classes.float} />
);

const Underline = ({ positionUnderline }) => {
  <motion.li
    animate={positionUnderline}
    className={classes.underline}
    layoutId="underline"
  />;
};

export default Tabs;
