/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./StepArea.module.scss";
import StepIcon from "@/icons/StepIcon";
const steps = [
  {
    photo: "step1.jpg",
    title: "Preparation",
    desc: "All furniture, items, and floors are covered.  Walls and ceilings are inspected for cracks, filled, and sanded.  All baseboards, windows, and frames are professionally taped as needed.",
  },
  {
    photo: "step2.jpg",
    title: "Painting",
    desc: "Customer specifications are fully detailed and outlined in a professional quote or proposal.",
  },
  {
    photo: "step3.jpg",
    title: "Cleaning",
    desc: "Rooms are returned to their prior state.",
  },
  {
    photo: "step4.jpg",
    title: "Inspect",
    desc: "Post-painting inspection of all work is conducted to assure the customer is completely 100% satisfied.  We don't consider the job done unless you're 100% happy with the outcome.",
  },
];
const StepArea = () => {
  return (
    <section className={styles.stepArea}>
      <div className={styles["stepArea-container"]}>
        {/* Title */}
        <span className={styles["stepArea-subtitle"]}>Our Process</span>
        <span className={styles["stepArea-title"]}>How We Work</span>
        <span className={styles["stepArea-desc"]}>
          We pride ourselves on the number of repeat customers year after year.
          Providing our clients with the highest quality artistry and meticulous
          attention to detail. Our strong work ethics and pursuit of perfection
          has earned us a reputation of excellence among our clients. Your
          satisfaction is our primary objective. We won't consider the job done
          unless you're 100% satisfied with the finished product. We pre-screen
          and background check all our staff so you can feel confident about the
          people in your space.
        </span>
        {/* Steps */}
        <div className={styles["stepArea-steps"]}>
          {steps.map((step, i) => (
            <React.Fragment key={step.title}>
              <div className={styles["stepArea-step"]}>
                <img
                  className={styles["stepArea-step-img"]}
                  src={step.photo}
                  alt={step.title}
                />
                <span className={styles["stepArea-step-title"]}>
                  {step.title}
                </span>
                <span className={styles["stepArea-step-desc"]}>
                  {step.desc}
                </span>
              </div>
              {i < steps.length - 1 && <StepIcon />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepArea;
