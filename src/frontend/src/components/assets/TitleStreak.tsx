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
                    <ellipse
                        cx="35"
                        cy="35"
                        rx="45"
                        ry="35"
                        fill="rgba(243, 221, 195, 1)"
                    />
                    <g fill="none" stroke={brandColor} strokeWidth="2">
                        {/* Outer Oval Boundary */}
                        <ellipse cx="35" cy="35" rx="40" ry="30" />

                        {/* Vertical Meridians (Longitude) */}
                        <line x1="35" y1="5" x2="35" y2="65" /> 
                        
                        
                        {/* Middle Set */}
                        <path d="M35,5 C18,10 18,60 35,65" />
                        <path d="M35,5 C52,10 52,60 35,65" />
                        
                        {/* Outer Set */}
                        <path d="M35,5 C-2.5,12 -2.5,58 35,65" />
                        <path d="M35,5 C72.5,12 72.5,58 35,65" />

                        {/* Horizontal Parallels (Latitude) */}
                        <line x1="-6" y1="35" x2="75" y2="35" />
                        <line x1="0" y1="20" x2="70" y2="20" />
                        <line x1="0" y1="50" x2="70" y2="50" />
                    </g>
                </motion.svg>
            </svg>
        </div>
    );
};

export default TitleStreak;
