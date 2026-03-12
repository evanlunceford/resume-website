import Galaxy from "../components/assets/Galaxy";
import RocketShip from "../components/assets/RocketShip";
import RainbowRays from "../components/assets/RainbowRays";
import LensFlare from "../components/assets/LensFlare";
import "../css/pages/Home.css";

export default function Home() {
    return(
        <div className="home-container">
            <Galaxy 
                mouseRepulsion={false}
                mouseInteraction={false}
                density={1}
                glowIntensity={0.3}
                saturation={0.3}
                hueShift={190}
                twinkleIntensity={0.3}
                rotationSpeed={0.0001}
                autoCenterRepulsion={0}
                starSpeed={0.000001}
                speed={0.001}
            />  
            <div className="glow-backdrop">
                {/* First 4 are for name container */}
                <div className="glow-spot spot-1" />
                <div className="glow-spot spot-2" />
                <div className="glow-spot spot-3" />
                <div className="glow-spot spot-4" />
                {/* Placed around the rest of the screen */}
                <div className="glow-spot spot-5" />
                <div className="glow-spot spot-6" />
                <div className="glow-spot spot-7" />
                <div className="glow-spot spot-8" />
                <div className="glow-spot spot-9" />
            </div>
            <RainbowRays />
            <LensFlare />
            <div className="home-content">
                <div className="name-container">
                    <h1 className="first-name">
                        Evan
                    </h1>
                    <h1 className="last-name">
                        Lunceford
                    </h1>
                </div>
                <div className="description">
                    <div className="rocket">
                        <RocketShip />
                    </div>
                    <span className="description-text">
                        Software Engineer | Data Analyst
                    </span>
                </div>
            </div>     
        </div>
    );
}