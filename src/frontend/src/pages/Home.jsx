import Galaxy from "../components/assets/Galaxy";
import RocketShip from "../components/assets/RocketShip";
import "../css/pages/Home.css";

export default function Home() {
    return(
        <div className="home-container">
            <Galaxy 
                mouseRepulsion={false}
                mouseInteraction={false}
                density={3}
                glowIntensity={0.3}
                saturation={0}
                hueShift={140}
                twinkleIntensity={0.3}
                rotationSpeed={0.001}
                autoCenterRepulsion={0}
                starSpeed={0.0001}
                speed={0.1}
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
            </div>
            <div className="home-content">
                <div className="name-container">
                    <h1 className="first-name">
                        Evan
                    </h1>
                    <h1 className="last-name">
                        Lunceford
                    </h1>
                </div>
            </div>     
        </div>
    );
}