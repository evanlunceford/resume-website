import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, type Variants } from "framer-motion";
import TitleStreak from "../components/assets/TitleStreak";
import CrtHeadshot from "../components/CrtHeadshot";
import ExperienceTimeline from "../components/ExperienceTimeline";
import SkillsSection from "../components/SkillsSection";
import "../css/pages/Home.css";

const titleVariants: Variants = {
  hidden:  { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.25, ease: "easeOut" as const } },
};

const underlineContainerVariants: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const segVariants: Variants = {
  hidden:  { opacity: 0, x: -14 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const } },
};

const timelineFadeVariants: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.65, delay: 0.35 } },
};

// Skills variants
const skillIconVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { delay: 0.4, duration: 0.3 } 
  }
};

const skillLineContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, 
    }
  }
};

const skillLineVariants: Variants = {
  hidden: { scaleX: 0 },
  visible: { 
    scaleX: 1, 
    transition: { duration: 0.6, ease: "easeOut" as const } 
  }
};



export default function Home() {
  // Animation reference for Experience
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  // Animation reference for Skills
  const skillsRef = useRef(null);
  const skillsInView = useInView(skillsRef, { once: true, margin: "-80px" });

  // Animation reference for intro heading
  const introRef = useRef(null);
  const introInView = useInView(introRef, { once: true, margin: "-80px" });


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
          <Link to="/projects" className="home-action-button">
            <img src="/projects.svg" alt="folder" className="navbar-icon" />
            <span>Projects</span>
          </Link>
          <Link to="/about" className="home-action-button">
            <img src="/about-me.svg" alt="person waving" className="navbar-icon" />
            <span>About Me</span>
          </Link>
          <a href="#contact" className="home-action-button">
            <img src="/mail.svg" alt="mail" className="navbar-icon" />
            <span>Contact Me</span>
          </a>
        </div>

        <TitleStreak />
      </div>
      <div className="main-content-container">
        <div className="intro-container">
          <div className="intro-left">
            <CrtHeadshot />
          </div>

          <div className="intro-right">
            <div className="intro-copy" ref={introRef}>
              <motion.h3
                className="intro-heading"
                initial={{ opacity: 0 }}
                animate={introInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8 }}
              >
                Hello
              </motion.h3>
              <div className="intro-copy-divider" aria-hidden="true">
                <span className="intro-copy-divider__line intro-copy-divider__line--teal" />
                <span className="intro-copy-divider__line intro-copy-divider__line--orange" />
                <span className="intro-copy-divider__line intro-copy-divider__line--brown" />
              </div>
              <p className="intro-text">
                Thanks for visiting my website! As noted by the gigantic title, my name is Evan Lunceford, and I am currently
                a Computer Science student at Northern Arizona University.
              </p>
              <p className="intro-text">
                This website is meant to showcase the type of software I produce in order to show you what kind of
                programmer I am. If you want to learn more about how I work, check out the About page. Thanks again!
              </p>
            </div>
          </div>
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

        <div className="skills-content-container" ref={skillsRef}>
          <div className="skills-header">
            <div className="skills-title-wrapper">
              <h2 className="skills-title">Skills</h2>
              <div className="skills-underline">
                <motion.div 
                      className="skills-underline-container"
                      variants={skillLineContainerVariants}
                      initial="hidden"
                      animate={skillsInView ? "visible" : "hidden"}
                    >
                      <div className="skills-lines">
                        {/* transformOrigin "left" ensures they grow from the start of the text */}
                        <motion.div 
                          className="line line-1" 
                          variants={skillLineVariants} 
                          style={{ originX: 0 }} 
                        />
                        <motion.div 
                          className="line line-2" 
                          variants={skillLineVariants} 
                          style={{ originX: 0 }} 
                        />
                        <motion.div 
                          className="line line-3" 
                          variants={skillLineVariants} 
                          style={{ originX: 0 }} 
                        />
                      </div>

                      <motion.img 
                        src="/skills.svg" 
                        alt="Skills Icon" 
                        className="skills-icon"
                        variants={skillIconVariants}
                      />
                    </motion.div>
              </div>
            </div>
              

          </div>
          <SkillsSection />
        </div>
      </div>

    </div>
  )
}
