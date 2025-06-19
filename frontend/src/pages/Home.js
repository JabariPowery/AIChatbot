import classes from "../components/Home.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useRef, useEffect } from "react";

function Home() {
  //3d render bot, have bot move down while user scrolls and move side to side beside reading content
  //bot name is Wattle (Daub as alternate?)
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  const panel_1 = useRef(null);
  const panel_2 = useRef(null);
  const panel_3 = useRef(null);

  useEffect(() => {
    const panels = [panel_1.current, panel_2.current, panel_3.current];
    if (panels.some((panel) => !panel)) return;

    const tl = gsap.timeline();
    const startTime = performance.now();

    function goToSection(i, panel) {
      if (tl.isActive()) return;

      tl.to(window, {
        scrollTo: { y: panel, autoKill: false },
        duration: 0.7,
        ease: "power2.out",
      });
    }

    const triggers = panels.map((panel, i) => {
      const enterTrigger = ScrollTrigger.create({
        markers: { startColor: "green", endColor: "red" },
        trigger: panel,
        start: "top 80%",
        end: "bottom bottom",
        toggleActions: "play none none reverse",
        once: false,
        onEnter: () => goToSection(i, panel),
      });
      const enterBackTrigger = ScrollTrigger.create({
        markers: { startColor: "green", endColor: "red" },
        trigger: panel,
        start: "bottom bottom",
        onEnterBack: () => goToSection(i, panel),
      });

      return [enterTrigger, enterBackTrigger];
    });

    const endTime = performance.now();
    console.log(`ScrollTrigger setup took ${endTime - startTime}ms`);

    return () => {
      triggers.flat().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className={classes.part1container}>
      <section ref={panel_1} className={classes.panel}>
        <p panel_1={panel_1}>
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
        {/* <Page panel_1={panel_1} /> */}
      </section>

      <section ref={panel_2} className={classes.panel}>
        <p panel_2={panel_2}>
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
        {/* <Page panel_2={panel_2} /> */}
      </section>

      <section ref={panel_3} className={classes.panel}>
        <p panel_3={panel_3}>
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
        {/* <Page panel_3={panel_3} /> */}
      </section>
    </div>
  );
}

export default Home;
