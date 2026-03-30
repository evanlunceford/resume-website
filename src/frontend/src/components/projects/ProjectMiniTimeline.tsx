import "../../css/components/ProjectMiniTimeline.css";

type ProjectMiniTimelineProps = {
  startDate: string;
  endDate: string | "Present";
  className?: string;
};

function parseProjectDate(dateValue: string): Date {
  if (dateValue.toLowerCase() === "present") {
    return new Date();
  }

  const [yearText, monthText] = dateValue.split("-");
  const year = Number(yearText);
  const month = monthText ? Number(monthText) - 1 : 0;

  if (Number.isNaN(year) || Number.isNaN(month)) {
    return new Date();
  }

  return new Date(year, month, 1);
}

function formatTimelineLabel(dateValue: string): string {
  if (dateValue.toLowerCase() === "present") {
    return "Present";
  }

  const parsed = parseProjectDate(dateValue);
  return parsed.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

function formatDuration(startDate: string, endDate: string): string {
  const start = parseProjectDate(startDate);
  const end = parseProjectDate(endDate);

  const monthDelta =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth()) +
    1;

  const normalizedMonths = Math.max(monthDelta, 1);
  const years = Math.floor(normalizedMonths / 12);
  const months = normalizedMonths % 12;

  if (years > 0 && months > 0) {
    return `${years}y ${months}m`;
  }
  if (years > 0) {
    return `${years}y`;
  }
  return `${months}m`;
}

export default function ProjectMiniTimeline({
  startDate,
  endDate,
  className,
}: ProjectMiniTimelineProps) {
  const startLabel = formatTimelineLabel(startDate);
  const endLabel = formatTimelineLabel(endDate);
  const durationLabel = formatDuration(startDate, endDate);

  return (
    <div
      className={`project-mini-timeline${className ? ` ${className}` : ""}`}
      role="img"
      aria-label={`Project timeline from ${startLabel} to ${endLabel}, lasting ${durationLabel}`}
    >
      <div className="project-mini-timeline__labels">
        <span>{startLabel}</span>
        <span className="project-mini-timeline__duration">{durationLabel}</span>
        <span>{endLabel}</span>
      </div>
      <div className="project-mini-timeline__rail" aria-hidden="true">
        <span className="project-mini-timeline__cap project-mini-timeline__cap--start" />
        <span className="project-mini-timeline__fill" />
        <span className="project-mini-timeline__cap project-mini-timeline__cap--end" />
      </div>
    </div>
  );
}
