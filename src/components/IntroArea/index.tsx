/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./IntroArea.module.scss";
const IntroArea = () => {
  return (
    <section className={styles.introArea}>
      <div className={styles["introArea-container"]}>
        {/* Left image */}
        <img
          src="introArea.jpg"
          className={styles["introArea-container-img"]}
          alt="introImage"
        />
        {/* Right Text */}
        <div className={styles["introArea-container-text"]}>
          If you're planning your next residential or commercial makeover and
          are in need of reliable Painters, contact Lexington Painting; located
          in New York Design Center, in the heart of NYC with over 39 years of
          experience. We offer comprehensive residential and commercial painting
          services.
          {"\n\n"}
          Spiro Markozanis, the owner of Lexington Painting, is a fully licensed
          and insured professional. He will take the stress and worry out of
          your next painting project. There is a working supervisor on each job
          site. A full job inspection is conducted with the Customer to ensure
          100% customer satisfaction.
          {"\n\n"}
          We pride ourselves on the number of repeat customers year after year.
          Providing our clients with the highest quality artistry and meticulous
          attention to detail. Our strong work ethics and pursuit of perfection
          has earned us a reputation of excellence among our clients. Your
          satisfaction is our primary objective. We won't consider the job done
          unless you're 100% satisfied with the finished product. We pre-screen
          and background check all our staff so you can feel confident about the
          people in your space.
        </div>
      </div>
    </section>
  );
};

export default IntroArea;
