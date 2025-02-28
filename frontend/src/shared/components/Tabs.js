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
    left: 10,
    width: 80,
    top: 30,
    opacity: 0,
  });

  const tabs = [
    { id: 1, route: "/", name: "Home" },
    { id: 2, route: "/register", name: "Register" },
    { id: 3, route: "/login", name: "Login" },
  ];

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className={classes.list}>
      {tabs.map(({ id, route, name }) => {
        return (
          <Tab
            key={id}
            setPosition={setPosition}
            setPositionUnderline={setPositionUnderline}>
            <NavLink
              key={id}
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
      <Underline positionUnderline={positionUnderline} />
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
          left: ref.current.offsetLeft,
        });
      }}
      onClick={() => {
        if (!ref.current) return;

        // const { width } = ref.current.getBoundingClientRect();
        // const data = ref.current.getBoundingClientRect();
        // console.log();
        setPositionUnderline((pv) => ({
          ...pv,
          left: ref.current.offsetLeft,
          opacity: 1,
        }));
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
