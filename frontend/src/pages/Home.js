import classes from "../components/Home.module.css";
import { motion } from "motion/react";

function Home() {
  //3d render bot, have bot move down while user scrolls and move side to side beside reading content
  //bot name is Wattle (Daub as alternate?)
  return (
    <>
      <motion.div className={classes.section1}>
        <h1>Welcome</h1>
        <div className={classes.part1}>
          <p>
            Meet Wattle, Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Sed quis molestie mauris. Ut suscipit semper ex, nec hendrerit
            nisi feugiat eu. Praesent gravida mattis sodales. Aenean vulputate
            nec orci vitae viverra. Nunc feugiat sollicitudin feugiat. Donec
            semper aliquet ornare. Integer diam mauris, rhoncus et elit
            sollicitudin, malesuada placerat ante. Phasellus ut lobortis tortor.
            Nunc tempor porta nulla non commodo. Phasellus blandit fermentum
            diam, vitae porttitor mi scelerisque vitae. Pellentesque malesuada
            suscipit dolor, vitae commodo ante commodo non. Aliquam tincidunt
            diam sit amet elit gravida, sit amet mollis massa sollicitudin. Duis
            imperdiet risus ut neque facilisis ultrices nec a est.
          </p>
          <p>
            Meet Wattle, Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Sed quis molestie mauris. Ut suscipit semper ex, nec hendrerit
            nisi feugiat eu. Praesent gravida mattis sodales. Aenean vulputate
            nec orci vitae viverra. Nunc feugiat sollicitudin feugiat. Donec
            semper aliquet ornare. Integer diam mauris, rhoncus et elit
            sollicitudin, malesuada placerat ante. Phasellus ut lobortis tortor.
            Nunc tempor porta nulla non commodo. Phasellus blandit fermentum
            diam, vitae porttitor mi scelerisque vitae. Pellentesque malesuada
            suscipit dolor, vitae commodo ante commodo non. Aliquam tincidunt
            diam sit amet elit gravida, sit amet mollis massa sollicitudin. Duis
            imperdiet risus ut neque facilisis ultrices nec a est.
          </p>
          <p>
            Meet Wattle, Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Sed quis molestie mauris. Ut suscipit semper ex, nec hendrerit
            nisi feugiat eu. Praesent gravida mattis sodales. Aenean vulputate
            nec orci vitae viverra. Nunc feugiat sollicitudin feugiat. Donec
            semper aliquet ornare. Integer diam mauris, rhoncus et elit
            sollicitudin, malesuada placerat ante. Phasellus ut lobortis tortor.
            Nunc tempor porta nulla non commodo. Phasellus blandit fermentum
            diam, vitae porttitor mi scelerisque vitae. Pellentesque malesuada
            suscipit dolor, vitae commodo ante commodo non. Aliquam tincidunt
            diam sit amet elit gravida, sit amet mollis massa sollicitudin. Duis
            imperdiet risus ut neque facilisis ultrices nec a est.
          </p>
          <p>
            Meet Wattle, Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Sed quis molestie mauris. Ut suscipit semper ex, nec hendrerit
            nisi feugiat eu. Praesent gravida mattis sodales. Aenean vulputate
            nec orci vitae viverra. Nunc feugiat sollicitudin feugiat. Donec
            semper aliquet ornare. Integer diam mauris, rhoncus et elit
            sollicitudin, malesuada placerat ante. Phasellus ut lobortis tortor.
            Nunc tempor porta nulla non commodo. Phasellus blandit fermentum
            diam, vitae porttitor mi scelerisque vitae. Pellentesque malesuada
            suscipit dolor, vitae commodo ante commodo non. Aliquam tincidunt
            diam sit amet elit gravida, sit amet mollis massa sollicitudin. Duis
            imperdiet risus ut neque facilisis ultrices nec a est.
          </p>
        </div>
      </motion.div>
    </>
  );
}

export default Home;
