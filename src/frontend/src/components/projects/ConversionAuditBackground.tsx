import "../../css/components/ConversionAuditBackground.css";

const TAGS = [
  { id: "meta", src: "/tags/meta.png", alt: "Meta Pixel", size: 72, left: 8, drift: -22, duration: 17, delay: -0.5, spin: 7 },
  { id: "google-ads", src: "/tags/google-ads.webp", alt: "Google Ads", size: 64, left: 24, drift: 18, duration: 19, delay: -3.2, spin: -9 },
  { id: "google-analytics", src: "/tags/google-analytics.webp", alt: "Google Analytics 4", size: 68, left: 42, drift: -14, duration: 16, delay: -6.1, spin: 8 },
  { id: "google-tag", src: "/tags/google-tag.svg", alt: "Google Tag Manager", size: 78, left: 58, drift: 24, duration: 20, delay: -1.4, spin: -6 },
  { id: "tiktok", src: "/tags/tiktok.png", alt: "TikTok Pixel", size: 60, left: 74, drift: -20, duration: 17.5, delay: -4.8, spin: 10 },
  { id: "linkedin", src: "/tags/linkedin.png", alt: "LinkedIn Insight Tag", size: 64, left: 15, drift: 16, duration: 18.5, delay: -8, spin: -8 },
  { id: "snapchat", src: "/tags/snapchat.svg", alt: "Snapchat Pixel", size: 58, left: 88, drift: -18, duration: 16.5, delay: -2.2, spin: 9 },
  { id: "pinterest", src: "/tags/pintrest.png", alt: "Pinterest Tag", size: 60, left: 66, drift: 20, duration: 19.5, delay: -6.8, spin: -7 },
  { id: "hubspot", src: "/tags/hubspot.png", alt: "HubSpot", size: 64, left: 33, drift: -16, duration: 18, delay: -9.4, spin: 8 },
  { id: "shopify", src: "/tags/shopify.png", alt: "Shopify", size: 66, left: 50, drift: 22, duration: 16, delay: -1.9, spin: -10 },
];

export default function ConversionAuditBackground({ className }: { className?: string }) {
  return (
    <div className={`conversion-audit-bg ${className ?? ""}`.trim()} aria-hidden="true">
      {TAGS.map((tag) => (
        <div
          key={tag.id}
          className="conversion-audit-bubble"
          style={{
            left: `${tag.left}%`,
            width: tag.size,
            height: tag.size,
            animationDuration: `${tag.duration}s`,
            animationDelay: `${tag.delay}s`,
            ['--conversion-audit-drift' as string]: `${tag.drift}px`,
          }}
        >
          <div
            className="conversion-audit-bubble-spin"
            style={{
              animationDuration: `${Math.abs(tag.spin)}s`,
              animationDirection: tag.spin < 0 ? "reverse" : "normal",
            }}
          >
            <img src={tag.src} alt={tag.alt} className="conversion-audit-bubble-logo" />
          </div>
        </div>
      ))}
    </div>
  );
}
