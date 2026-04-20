import React from "react";
import "../../css/components/assets/TitleStreak.css";
import { motion, type Variants } from "framer-motion";

const TitleStreak: React.FC = () => {
    const brandColor = "rgba(30, 168, 150, 1)";

    const lineVariants: Variants = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: () => ({
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { delay: 0.5, duration: 1, ease: "easeInOut" },
                opacity: { delay: 0.5, duration: 0.01 }
            }
        })
    };

const iconVariants: Variants = {
    hidden: { 
        scale: 0, 
        opacity: 0 
    },
    visible: {
        scale: 1,
        opacity: 1,
        transition: { 
            opacity: { 
                type: "tween",
                ease: "linear",
                duration: 0.5,
                delay: 0.3
            }
        }
    }
};

    return (
        <div className="title-streak-container">
            <svg width="100%" height="100%" viewBox="0 0 400 100" preserveAspectRatio="xMinYMid meet">
                {[...Array(5)].map((_, i) => {
                const lineLength = "85%";
                return (
                    <motion.line
                        key={i}
                        x1="0"
                        y1={20 + i * 15}
                        x2={lineLength} 
                        y2={20 + i * 15}
                        stroke={brandColor}
                        strokeWidth="2"
                        variants={lineVariants}
                        initial="hidden"
                        animate="visible"
                        />
                    );
                })}

                <motion.svg
                    x="74%"
                    y="10.5%"
                    width="80"
                    height="80"
                    viewBox="0 0 70 70"
                    variants={iconVariants}
                    initial="hidden"
                    animate="visible"
                    style={{ overflow: "visible" }}
                >
                    <defs>
                        <clipPath id="title-streak-logo-clip">
                            <ellipse cx="35" cy="35" rx="40" ry="30" />
                        </clipPath>
                    </defs>
                    <ellipse
                        cx="35"
                        cy="35"
                        rx="42"
                        ry="33"
                        fill="rgba(243, 221, 195, 1)"
                    />
                    <image
                        href="/brand-assets/hero-logo.svg"
                        x="-4"
                        y="5"
                        width="78"
                        height="60"
                        preserveAspectRatio="xMidYMid meet"
                        clipPath="url(#title-streak-logo-clip)"
                    />
                </motion.svg>
            </svg>
        </div>
    );
};

export default TitleStreak;
