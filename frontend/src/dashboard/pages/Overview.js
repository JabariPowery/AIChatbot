import { motion } from "motion/react";
import classes from "../components/Overview.module.css";
import Test from "../server/test";

function Overview() {
  const data = Test();

  const cards = [
    {
      cardName: data.id,
      description: data.name,
    },
    {
      cardName: "Two",
      description:
        "This contains info about the card, it should fit under the image or whatever else the card is gonna contain",
    },
    {
      cardName: "Three",
      description:
        "This contains info about the card, it should fit under the image or whatever else the card is gonna contain",
    },
  ];

  console.log(Test);

  return (
    <>
      <h1>HomePage</h1>
      <div className={classes.section1}>
        <ul>
          {cards.map((card, index) => {
            return (
              <li className={classes.card} key={index}>
                <div className={classes.span}></div>
                <h1>{card.cardName}</h1>
                <p>{card.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={classes.section2}></div> {/*dashboard part i guess*/}
    </>
  );
}

export default Overview;
