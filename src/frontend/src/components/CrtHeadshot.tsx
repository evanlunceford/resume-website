import { useEffect, useMemo, useState, type CSSProperties } from "react";
import "../css/components/CrtHeadshot.css";

const DEFAULT_IMAGES = ["/evan-headshot.jpg"];

type CrtHeadshotProps = {
  alt?: string;
  ariaLabel?: string;
  className?: string;
  images?: string[];
  intervalMs?: number;
  imageClassName?: string;
  imageFit?: CSSProperties["objectFit"];
  screenAspectRatio?: string;
  showVignette?: boolean;
};

export default function CrtHeadshot({
  alt = "Evan Lunceford headshot",
  ariaLabel = "Evan headshot display",
  className = "",
  images = DEFAULT_IMAGES,
  intervalMs = 10000,
  imageClassName = "",
  imageFit = "cover",
  screenAspectRatio = "4 / 5",
  showVignette = true,
}: CrtHeadshotProps) {
  const validImages = useMemo(
    () => (images.length > 0 ? images : DEFAULT_IMAGES),
    [images]
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setActiveIndex(0);
    setIsTransitioning(false);
  }, [validImages]);

  useEffect(() => {
    if (validImages.length <= 1) {
      return undefined;
    }

    let transitionTimeoutId: number | undefined;
    const intervalId = window.setInterval(() => {
      setIsTransitioning(true);

      transitionTimeoutId = window.setTimeout(() => {
        setActiveIndex((currentIndex) => (currentIndex + 1) % validImages.length);
        setIsTransitioning(false);
      }, 320);
    }, intervalMs);

    return () => {
      window.clearInterval(intervalId);
      if (transitionTimeoutId !== undefined) {
        window.clearTimeout(transitionTimeoutId);
      }
    };
  }, [intervalMs, validImages.length]);

  return (
    <div className={`crt-frame ${className}`.trim()} aria-label={ariaLabel}>
      <div
        className="crt-screen"
        style={{ "--crt-screen-aspect-ratio": screenAspectRatio } as CSSProperties}
      >
        <img
          src={validImages[activeIndex]}
          alt={alt}
          className={`crt-headshot ${imageClassName} ${isTransitioning ? "crt-headshot--transitioning" : ""}`.trim()}
          style={{ objectFit: imageFit }}
        />
        <span
          className={`crt-static ${isTransitioning ? "crt-static--active" : ""}`.trim()}
          aria-hidden="true"
        />
        <span className="crt-tint" aria-hidden="true" />
        <span className="crt-glow" aria-hidden="true" />
        <span className="crt-scanlines" aria-hidden="true" />
        {showVignette ? <span className="crt-vignette" aria-hidden="true" /> : null}
      </div>
    </div>
  );
}
