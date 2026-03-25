import TitleStreak from "../components/assets/TitleStreak";
import ExperienceTimeline from "../components/ExperienceTimeline";
import "../css/pages/Home.css";

export default function Home() {
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
        
        <TitleStreak />
      </div>

      <div className="timeline-content-container">
        <h2 className="timeline-heading">Experience</h2>
        <ExperienceTimeline />
      </div>
      
    </div>
  )
}
