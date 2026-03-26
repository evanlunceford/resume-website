import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import TitleStreak from "../components/assets/TitleStreak";
import ExperienceTimeline from "../components/ExperienceTimeline";
import SkillsSection from "../components/SkillsSection";
import "../css/pages/Home.css";

const titleVariants = {
  hidden:  { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.25, ease: "easeOut" } },
};

const underlineContainerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const segVariants = {
  hidden:  { opacity: 0, x: -14 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
};

const timelineFadeVariants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.65, delay: 0.35 } },
};

export default function Home() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <div className="home-container">
      <div className="home-content-container">
        <div className="home-title-container">
          <h1 className="home-name">
            Evan Lunceford
          </h1>
          <h2 className="home-description">
            Software Developer | Data Analyst
          </h2>
        </div>
        <div className="home-buttons">

        </div>

        <TitleStreak />
      </div>

      <div className="timeline-content-container" ref={sectionRef}>
        <div className="timeline-header">
          <motion.h2
            className="timeline-title"
            variants={titleVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            Experience
          </motion.h2>
        </div>

        <motion.div
          className="timeline-title-underline"
          variants={underlineContainerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="ttu-seg ttu-teal"      variants={segVariants} />
          <motion.div className="ttu-seg ttu-orange"    variants={segVariants} />
          <motion.div className="ttu-seg ttu-dark-teal" variants={segVariants} />
          <motion.div className="ttu-seg ttu-peach"     variants={segVariants} />
          <motion.div className="ttu-seg ttu-brown"     variants={segVariants} />
          <motion.div className="ttu-seg ttu-grey"      variants={segVariants} />
        </motion.div>

        <motion.div
          variants={timelineFadeVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <ExperienceTimeline />
        </motion.div>
      </div>

      <div className="skills-content-container">
        <h2 className="skills-heading">Skills</h2>
        <SkillsSection />
      </div>

    </div>
  )
}
