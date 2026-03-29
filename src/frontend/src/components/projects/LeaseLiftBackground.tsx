import { useMemo } from "react";
import "../../css/components/LeaseLiftBackground.css";

type Building = {
  name: string;
  width: string;
  height: string;
  windows: number;
  top: string;
  columns: number;
  shape: "flat" | "stepped" | "tower" | "block" | "gable" | "hall";
  usage: "academic" | "dorm" | "apartment" | "student-center";
};

const buildingBlueprints: Building[] = [
  { name: "lecture-hall", width: "8%", height: "22%", windows: 4, top: "24%", columns: 2, shape: "hall", usage: "academic" },
  { name: "admin", width: "9%", height: "30%", windows: 8, top: "18%", columns: 3, shape: "block", usage: "academic" },
  { name: "lab", width: "7%", height: "24%", windows: 4, top: "22%", columns: 2, shape: "flat", usage: "academic" },
  { name: "dorm-east", width: "12%", height: "48%", windows: 15, top: "8%", columns: 3, shape: "flat", usage: "dorm" },
  { name: "library", width: "10%", height: "34%", windows: 8, top: "14%", columns: 3, shape: "stepped", usage: "academic" },
  { name: "apartments", width: "14%", height: "60%", windows: 15, top: "4%", columns: 3, shape: "tower", usage: "apartment" },
  { name: "student-center", width: "10%", height: "27%", windows: 7, top: "20%", columns: 3, shape: "block", usage: "student-center" },
  { name: "science", width: "9%", height: "32%", windows: 8, top: "16%", columns: 3, shape: "flat", usage: "academic" },
  { name: "dorm-west", width: "11%", height: "44%", windows: 12, top: "10%", columns: 3, shape: "stepped", usage: "dorm" },
  { name: "arts", width: "8%", height: "26%", windows: 5, top: "22%", columns: 2, shape: "gable", usage: "academic" },
  { name: "rec", width: "7%", height: "20%", windows: 4, top: "26%", columns: 2, shape: "hall", usage: "academic" },
  { name: "residence", width: "10%", height: "38%", windows: 12, top: "12%", columns: 3, shape: "block", usage: "dorm" },
  { name: "classroom", width: "7%", height: "24%", windows: 4, top: "22%", columns: 2, shape: "flat", usage: "academic" },
];

export default function LeaseLiftBackground({ className }: { className?: string }) {
  const buildings = useMemo(
    () =>
      buildingBlueprints.map((building, buildingIndex) => ({
        ...building,
        id: `building-${buildingIndex}`,
        windows: Array.from({ length: building.windows }, (_, windowIndex) => ({
          id: `window-${buildingIndex}-${windowIndex}`,
          shadeClass: `lease-lift-window--shade-${(buildingIndex + windowIndex) % 4}`,
          bottomRowClass:
            windowIndex >= building.windows - building.columns
              ? "lease-lift-window--bottom-row"
              : "",
          litClass:
            (building.usage === "dorm" || building.usage === "apartment") &&
            (buildingIndex * 7 + windowIndex * 5) % 10 < 6
              ? "lease-lift-window--lit"
              : "lease-lift-window--dark",
          duration: `${(2.8 + ((buildingIndex + windowIndex) % 5) * 0.35).toFixed(2)}s`,
        })),
      })),
    []
  );

  const streetlamps = useMemo(
    () => [
      { id: "lamp-1", left: "12%", height: "52px" },
      { id: "lamp-2", left: "39%", height: "58px" },
      { id: "lamp-3", left: "71%", height: "54px" },
      { id: "lamp-4", left: "88%", height: "48px" },
    ],
    []
  );

  const cars = useMemo(
    () => [
      {
        id: "car-1",
        startLeft: "calc(-1 * var(--car-width) - 24px)",
        endLeft: "100%",
        width: "46px",
        colorClass: "lease-lift-car--teal",
        directionClass: "lease-lift-car--eastbound",
        duration: "34s",
        delay: "4s",
        laneBottom: "10%",
      },
      {
        id: "car-2",
        startLeft: "calc(-1 * var(--car-width) - 24px)",
        endLeft: "100%",
        width: "40px",
        colorClass: "lease-lift-car--amber",
        directionClass: "lease-lift-car--eastbound",
        duration: "36s",
        delay: "25s",
        laneBottom: "7%",
      },
      {
        id: "car-3",
        startLeft: "calc(-1 * var(--car-width) - 24px)",
        endLeft: "100%",
        width: "34px",
        colorClass: "lease-lift-car--slate",
        directionClass: "lease-lift-car--eastbound",
        duration: "38s",
        delay: "50s",
        laneBottom: "12%",
      },
      {
        id: "car-4",
        startLeft: "calc(-1 * var(--car-width) - 24px)",
        endLeft: "100%",
        width: "48px",
        colorClass: "lease-lift-car--teal",
        directionClass: "lease-lift-car--eastbound",
        duration: "30s",
        delay: "65s",
        laneBottom: "9%",
      },
    ],
    []
  );

  return (
    <div className={`lease-lift-bg ${className ?? ""}`.trim()} aria-hidden="true">
      <div className="lease-lift-sky-glow" />
      <div className="lease-lift-skyline">
        {buildings.map((building) => (
          <div
            key={building.id}
            className={`lease-lift-building lease-lift-building--${building.shape} lease-lift-building--${building.usage}`}
            style={
              {
                "--building-width": building.width,
                "--building-height": building.height,
                "--building-top": building.top,
                "--building-columns": building.columns,
              } as React.CSSProperties
            }
          >
            <div className="lease-lift-building-face" />
            {(building.usage === "academic" || building.usage === "student-center") && (
              <div className="lease-lift-building-accent" />
            )}
            <div className="lease-lift-window-grid">
              {building.windows.map((windowLight) => (
                <span
                  key={windowLight.id}
                  className={`lease-lift-window ${windowLight.shadeClass} ${windowLight.litClass} ${windowLight.bottomRowClass}`}
                  style={
                    {
                      "--window-duration": windowLight.duration,
                    } as React.CSSProperties
                  }
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="lease-lift-street">
        <div className="lease-lift-road" />
        {streetlamps.map((lamp) => (
          <div
            key={lamp.id}
            className="lease-lift-streetlamp"
            style={{ "--lamp-left": lamp.left, "--lamp-height": lamp.height } as React.CSSProperties}
          >
            <span className="lease-lift-streetlamp-head" />
            <span className="lease-lift-streetlamp-glow" />
          </div>
        ))}
        <div className="lease-lift-traffic">
          {cars.map((car) => (
            <div
              key={car.id}
              className={`lease-lift-car ${car.colorClass} ${car.directionClass}`}
              style={
                {
                  "--car-start-left": car.startLeft,
                  "--car-end-left": car.endLeft,
                  "--car-width": car.width,
                  "--car-duration": car.duration,
                  "--car-delay": car.delay,
                  "--car-lane-bottom": car.laneBottom,
                } as React.CSSProperties
              }
            >
              <span className="lease-lift-car-top" />
              <span className="lease-lift-car-window" />
              <span className="lease-lift-car-headlight lease-lift-car-headlight--front" />
              <span className="lease-lift-car-headlight lease-lift-car-headlight--rear" />
              <span className="lease-lift-car-wheel lease-lift-car-wheel--front" />
              <span className="lease-lift-car-wheel lease-lift-car-wheel--rear" />
            </div>
          ))}
        </div>
      </div>
      <div className="lease-lift-ground-fade" />
    </div>
  );
}
