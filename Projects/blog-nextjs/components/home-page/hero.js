import Image from "next/image";

import classes from "./hero.module.css";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src="/images/site/max.png" height={300} width={300} alt="Hero" />
      </div>

      <h1>Hi, I'm Max</h1>

      <p>
        I blog about Web Development - especially frameworks like React and
        Next.js
      </p>
    </section>
  );
};

export default Hero;
