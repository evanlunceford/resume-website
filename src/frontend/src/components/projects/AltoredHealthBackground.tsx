import "../../css/components/AltoredHealthBackground.css";

const BEAT_WIDTH = 300;
const BEATS = 4;

// One heartbeat on a 200-tall strip with the baseline at y=100: P wave, QRS spike, T wave.
const beat = (o: number) =>
  `L ${o + 70},100 Q ${o + 82},86 ${o + 94},100 L ${o + 110},100 L ${o + 116},110 ` +
  `L ${o + 124},28 L ${o + 132},152 L ${o + 140},100 L ${o + 170},100 ` +
  `Q ${o + 188},78 ${o + 206},100 L ${o + BEAT_WIDTH},100`;

const TRACE = `M 0,100 ${Array.from({ length: BEATS }, (_, index) => beat(index * BEAT_WIDTH)).join(" ")}`;

export default function AltoredHealthBackground({ className }: { className?: string }) {
  return (
    <div className={`altored-health-bg ${className ?? ""}`.trim()} aria-hidden="true">
      <svg
        className="altored-health-monitor"
        viewBox={`0 0 ${BEAT_WIDTH * BEATS} 200`}
        preserveAspectRatio="none"
      >
        <path className="altored-health-trace altored-health-trace--dim" d={TRACE} />
        <path className="altored-health-trace altored-health-trace--sweep" d={TRACE} pathLength={1000} />
      </svg>
    </div>
  );
}
