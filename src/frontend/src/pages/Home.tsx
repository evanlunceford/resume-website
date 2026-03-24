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
        <div className="home-picture-container">
          <img src="/evan-headshot.jpg" alt="My headshot" />
        </div>
      </div>
    </div>
  )
}
