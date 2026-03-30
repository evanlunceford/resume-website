import "../css/components/CrtHeadshot.css";

export default function CrtHeadshot() {
  return (
    <div className="crt-frame" aria-label="Evan headshot display">
      <div className="crt-screen">
        <img
          src="/evan-headshot.jpg"
          alt="Evan Lunceford headshot"
          className="crt-headshot"
        />
        <span className="crt-tint" aria-hidden="true" />
        <span className="crt-glow" aria-hidden="true" />
        <span className="crt-scanlines" aria-hidden="true" />
        <span className="crt-vignette" aria-hidden="true" />
      </div>
    </div>
  );
}
