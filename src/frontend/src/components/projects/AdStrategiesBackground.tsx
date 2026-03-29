import "../../css/components/AdStrategiesBackground.css";

export default function AdStrategiesBackground({ className }: { className?: string }) {
  return (
    <div className={`ad-strategies-bg ${className ?? ""}`.trim()} aria-hidden="true">
      <div className="ad-strategies-grid" />
      <div className="ad-strategies-bar-cluster">
        <span className="ad-strategies-bar ad-strategies-bar--1" />
        <span className="ad-strategies-bar ad-strategies-bar--2" />
        <span className="ad-strategies-bar ad-strategies-bar--3" />
        <span className="ad-strategies-bar ad-strategies-bar--4" />
        <span className="ad-strategies-bar ad-strategies-bar--5" />
        <span className="ad-strategies-bar ad-strategies-bar--6" />
      </div>
    </div>
  );
}
