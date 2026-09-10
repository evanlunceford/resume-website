import { useLayoutEffect, useRef, useState } from "react";
import DriftWall, { type DriftWallItem } from "../../react-bits/DriftWall";
import { DATAGO_COMPANY_LOGOS } from "../../data/datagoLogos";
import "../../css/components/DatagoBackground.css";

const LOGO_ITEMS: DriftWallItem[] = DATAGO_COMPANY_LOGOS.map((image) => ({ image }));

const TILE_WIDTH = 84;
const TILE_HEIGHT = 56;
const TILE_GAP = 10;
const MIN_COLUMNS = 3;

export default function DatagoBackground({ className }: { className?: string }) {
  const wallRef = useRef<HTMLDivElement>(null);
  const [columns, setColumns] = useState(MIN_COLUMNS);

  // Same "always cover the full card width" trick as the source Workforce
  // Dataset section: DriftWall sizes its plane intrinsically and scales it
  // ~1.18x rather than stretching to fill, so recompute columns from the
  // observed container width to avoid gaps at the card edges.
  useLayoutEffect(() => {
    const el = wallRef.current;
    if (!el) return;

    const ro = new ResizeObserver((entries) => {
      const width = entries[0].contentRect.width;
      const needed = Math.ceil(width / (TILE_WIDTH + TILE_GAP) / 1.1) + 3;
      setColumns(Math.max(MIN_COLUMNS, needed));
    });

    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={wallRef} className={`datago-bg ${className ?? ""}`.trim()} aria-hidden="true">
      <DriftWall
        items={LOGO_ITEMS}
        columns={columns}
        tileWidth={TILE_WIDTH}
        tileHeight={TILE_HEIGHT}
        gap={TILE_GAP}
        turn={0}
        speed={14}
        variance={0.3}
        dim={0.5}
        lift={18}
        overlayColor="#111827"
        className="datago-bg__drift"
      />
    </div>
  );
}
