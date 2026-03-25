import { useState, useMemo } from 'react';
import { experiences } from '../data/experience';
import '../css/components/ExperienceTimeline.css';

const BAR_COLORS = [
  'var(--teal)',
  'var(--orange)',
  'var(--dark-teal)',
  'var(--peach)',
  'var(--brown)',
  'var(--grey)',
];

const LANE_HEIGHT = 48;
const LANE_GAP = 14;

function parseDate(dateStr: string): Date {
  if (dateStr === 'present') return new Date();
  const parts = dateStr.split('-');
  const year = parseInt(parts[0], 10);
  const month = parts[1] ? parseInt(parts[1], 10) - 1 : 0;
  return new Date(year, month, 1);
}

function formatDate(dateStr: string): string {
  if (dateStr === 'present') return 'Present';
  const d = parseDate(dateStr);
  return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

export default function ExperienceTimeline() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [tooltipAnchor, setTooltipAnchor] = useState<{ x: number; y: number } | null>(null);

  // Compute the overall date range, padded to full years
  const { rangeStart, rangeEnd, totalMs } = useMemo(() => {
    const allMs = experiences.flatMap(e => [
      parseDate(e.startDate).getTime(),
      parseDate(e.endDate).getTime(),
    ]);
    const minYear = new Date(Math.min(...allMs)).getFullYear();
    const maxYear = new Date(Math.max(...allMs)).getFullYear();
    const rs = new Date(minYear, 0, 1);
    const re = new Date(maxYear + 1, 0, 1);
    return { rangeStart: rs, rangeEnd: re, totalMs: re.getTime() - rs.getTime() };
  }, []);

  const toPct = (date: Date) =>
    ((date.getTime() - rangeStart.getTime()) / totalMs) * 100;

  // Year tick labels
  const years = useMemo(() => {
    const arr: number[] = [];
    for (let y = rangeStart.getFullYear(); y <= rangeEnd.getFullYear(); y++) {
      arr.push(y);
    }
    return arr;
  }, [rangeStart, rangeEnd]);

  // Greedy interval scheduling: pack experiences into the fewest lanes
  // so overlapping periods stack visibly in adjacent rows
  const laneMap = useMemo(() => {
    const sorted = [...experiences].sort(
      (a, b) => parseDate(a.startDate).getTime() - parseDate(b.startDate).getTime()
    );
    const laneEnds: number[] = [];
    const map = new Map<number, number>();
    for (const exp of sorted) {
      const startMs = parseDate(exp.startDate).getTime();
      const endMs = parseDate(exp.endDate).getTime();
      const laneIdx = laneEnds.findIndex(t => t <= startMs);
      const lane = laneIdx === -1 ? laneEnds.length : laneIdx;
      if (laneIdx === -1) laneEnds.push(0);
      laneEnds[lane] = endMs;
      map.set(exp.id, lane);
    }
    return map;
  }, []);

  const numLanes = useMemo(
    () => Math.max(...Array.from(laneMap.values())) + 1,
    [laneMap]
  );

  const todayPct = toPct(new Date());
  const anyHovered = hoveredId !== null;
  const hoveredExp = hoveredId !== null
    ? (experiences.find(e => e.id === hoveredId) ?? null)
    : null;

  return (
    <section className="timeline-section">
      <div className="timeline-scroll">
        <div className="timeline-canvas">

          {/* Time axis with year markers */}
          <div className="timeline-axis">
            <div className="timeline-axis-line" />
            <div className="timeline-today-marker" style={{ left: `${todayPct}%` }} />
            {years.map(year => (
              <div
                key={year}
                className="timeline-year"
                style={{ left: `${toPct(new Date(year, 0, 1))}%` }}
              >
                <span className="timeline-year-label">{year}</span>
                <div className="timeline-year-tick" />
              </div>
            ))}
          </div>

          {/* Experience bars */}
          <div
            className="timeline-bars"
            style={{ height: `${numLanes * (LANE_HEIGHT + LANE_GAP) - LANE_GAP}px` }}
          >
            {experiences.map((exp, i) => {
              const lane = laneMap.get(exp.id) ?? 0;
              const left = toPct(parseDate(exp.startDate));
              const right = toPct(parseDate(exp.endDate));
              const width = right - left;
              const top = lane * (LANE_HEIGHT + LANE_GAP);
              const color = BAR_COLORS[i % BAR_COLORS.length];
              const isActive = hoveredId === exp.id;
              const isDimmed = anyHovered && !isActive;

              return (
                <div
                  key={exp.id}
                  className={`timeline-bar${isActive ? ' timeline-bar--active' : ''}${isDimmed ? ' timeline-bar--dim' : ''}`}
                  style={{
                    left: `${left}%`,
                    width: `${width}%`,
                    top: `${top}px`,
                    '--bc': color,
                    animationDelay: `${i * 0.1}s`,
                  } as React.CSSProperties}
                  onMouseEnter={e => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    setHoveredId(exp.id);
                    setTooltipAnchor({ x: rect.left + rect.width / 2, y: rect.top });
                  }}
                  onMouseLeave={() => {
                    setHoveredId(null);
                    setTooltipAnchor(null);
                  }}
                >
                  {/* Only show label text if the bar is wide enough */}
                  {width > 7 && (
                    <div className="timeline-bar-labels">
                      <span className="timeline-bar-company">{exp.company}</span>
                      <span className="timeline-bar-role">{exp.title}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* Tooltip rendered with fixed position so it escapes the scroll container */}
      {hoveredExp !== null && tooltipAnchor !== null && (
        <div
          className="timeline-tooltip"
          style={{
            left: `${tooltipAnchor.x}px`,
            top: `${tooltipAnchor.y - 14}px`,
          }}
        >
          <div className="timeline-tt-header">
            <span className="timeline-tt-company">{hoveredExp.company}</span>
            <span className={`timeline-tt-badge timeline-tt-badge--${hoveredExp.type}`}>
              {hoveredExp.type}
            </span>
          </div>
          <div className="timeline-tt-role">{hoveredExp.title}</div>
          <div className="timeline-tt-dates">
            {formatDate(hoveredExp.startDate)} — {formatDate(hoveredExp.endDate)}
          </div>
          <p className="timeline-tt-desc">{hoveredExp.description}</p>
        </div>
      )}
    </section>
  );
}
