import classes from "../components/Home.module.css";
import { motion } from "motion/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";

function Home() {
  //3d render bot, have bot move down while user scrolls and move side to side beside reading content
  //bot name is Wattle (Daub as alternate?)
  gsap.registerPlugin(ScrollTrigger);
  const pannel_1 = useRef(null);
  const pannel_2 = useRef(null);
  const pannel_3 = useRef(null);

  const pages = [pannel_1.current, pannel_2.current, pannel_3.current];

  useEffect(() => {
    function goToSection(i, pannel, anim) {
      const tl = gsap.timeline();
      if (tl.isActive()) return null;
      tl.to(pannel, {
        scrollTo: { y: pannel, autoKill: false },
        duration: 0.7,
        ease: "none",
      });
      if (anim) {
        anim.restart();
      }
    }

    pages.map((pannel, i) => {
      ScrollTrigger.create({
        trigger: pannel,
        onEnter: () => goToSection(i, pannel),
      });
      ScrollTrigger.create({
        trigger: pannel,
        start: "bottom bottom",
        onEnterBack: () => goToSection(i, pannel),
      });
    });
  });

  // useEffect(() => {
  //   function goToSection(i, pannel, anim) {
  //     const tl = gsap.timeline();
  //     if (tl.isActive()) return null;
  //     tl.to(window, {
  //       scrollTo: { y: pannel, autoKill: false },
  //       duration: 0.7,
  //       ease: "none",
  //     });
  //     if (anim) {
  //       anim.restart();
  //     }
  //   }

  //   pages.map((pannel, i) => {
  //     ScrollTrigger.create({
  //       trigger: pannel,
  //       onEnter: () => goToSection(i, pannel),
  //     });
  //     ScrollTrigger.create({
  //       trigger: pannel,
  //       start: "bottom bottom",
  //       onEnterBack: () => goToSection(i, pannel),
  //     });
  //   });
  // });

  return (
    <div className={classes.part1container}>
      <section ref={pannel_1} className={classes.pannel}>
        <p pannel_1={pannel_1}>
          Meet Wattle, Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed quis molestie mauris. Ut suscipit semper ex, nec hendrerit nisi
          feugiat eu. Praesent gravida mattis sodales. Aenean vulputate nec orci
          vitae viverra. Nunc feugiat sollicitudin feugiat. Donec semper aliquet
          ornare. Integer diam mauris, rhoncus et elit sollicitudin, malesuada
          placerat ante. Phasellus ut lobortis tortor. Nunc tempor porta nulla
          non commodo. Phasellus blandit fermentum diam, vitae porttitor mi
          scelerisque vitae. Pellentesque malesuada suscipit dolor, vitae
          commodo ante commodo non. Aliquam tincidunt diam sit amet elit
          gravida, sit amet mollis massa sollicitudin. Duis imperdiet risus ut
          neque facilisis ultrices nec a est.
        </p>
        {/* <Page pannel_1={pannel_1} /> */}
      </section>

      <section ref={pannel_2} className={classes.pannel}>
        <p pannel_2={pannel_2}>
          Meet Wattle, Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed quis molestie mauris. Ut suscipit semper ex, nec hendrerit nisi
          feugiat eu. Praesent gravida mattis sodales. Aenean vulputate nec orci
          vitae viverra. Nunc feugiat sollicitudin feugiat. Donec semper aliquet
          ornare. Integer diam mauris, rhoncus et elit sollicitudin, malesuada
          placerat ante. Phasellus ut lobortis tortor. Nunc tempor porta nulla
          non commodo. Phasellus blandit fermentum diam, vitae porttitor mi
          scelerisque vitae. Pellentesque malesuada suscipit dolor, vitae
          commodo ante commodo non. Aliquam tincidunt diam sit amet elit
          gravida, sit amet mollis massa sollicitudin. Duis imperdiet risus ut
          neque facilisis ultrices nec a est.
        </p>
        {/* <Page pannel_2={pannel_2} /> */}
      </section>

      <section ref={pannel_3} className={classes.pannel}>
        <p pannel_3={pannel_3}>
          Meet Wattle, Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed quis molestie mauris. Ut suscipit semper ex, nec hendrerit nisi
          feugiat eu. Praesent gravida mattis sodales. Aenean vulputate nec orci
          vitae viverra. Nunc feugiat sollicitudin feugiat. Donec semper aliquet
          ornare. Integer diam mauris, rhoncus et elit sollicitudin, malesuada
          placerat ante. Phasellus ut lobortis tortor. Nunc tempor porta nulla
          non commodo. Phasellus blandit fermentum diam, vitae porttitor mi
          scelerisque vitae. Pellentesque malesuada suscipit dolor, vitae
          commodo ante commodo non. Aliquam tincidunt diam sit amet elit
          gravida, sit amet mollis massa sollicitudin. Duis imperdiet risus ut
          neque facilisis ultrices nec a est.
        </p>
        {/* <Page pannel_3={pannel_3} /> */}
      </section>
    </div>
  );
}

export default Home;
