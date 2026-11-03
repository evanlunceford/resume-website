import Waves from "../../react-bits/Waves";
import "../../css/components/DryftBackground.css";

// Same wave settings as the Dryft landing pages.
export default function DryftBackground({ className }: { className?: string }) {
  return (
    <div className={`dryft-bg ${className ?? ""}`.trim()} aria-hidden="true">
      <Waves
        lineColor="rgba(255, 255, 255, 0.25)"
        backgroundColor="transparent"
        interactive={false}
        waveAmpX={24}
        waveAmpY={14}
        xGap={14}
        yGap={36}
      />
    </div>
  );
}
