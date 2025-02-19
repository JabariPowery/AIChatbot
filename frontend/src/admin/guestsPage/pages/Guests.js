import { motion } from "motion/react";
import classes from "../components/Guests.module.css";
import Test from "../server/test";

function Guests() {
  const data = Test();
  const cards = [
    {
      cardName: data.id,
      description: data.username,
    },
    {
      cardName: "Two",
      description: "Property 2",
    },
    {
      cardName: "Three",
      description: "Property 3",
    },
  ];

  return (
    <>
      <div className={classes.section1}>
        <ul>
          {cards.map((card, index) => {
            return (
              <motion.li
                className={classes.card}
                key={index}
                whileHover={{ scale: 1.08 }}
                // whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                <div className={classes.span}></div>
                <h1>{card.cardName}</h1>
                <p>{card.description}</p>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Guests;
