import React from "react";

import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I’m Varun Gokul</h1>
        <p className={styles.description}>
          I’m a Grade 12 student planning to pursue Computer/Electrical Engineering. I love learning new things and I’m always looking for  challenges that push me to learn, build, and create. 
        </p>
        <a href="/assets/hero/Resume (2026) Varun Gokul.pdf" target="_blank" className={styles.resumeBtn}>
          Download Resume
        </a>
      </div>
      <img
        src="/assets/hero/Varun.png"
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};