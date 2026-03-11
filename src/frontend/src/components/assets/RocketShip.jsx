import "../../css/components/assets/RocketShip.css";

export default function RocketShip() {
  return (
    <div id="js-rocket">
      <svg
        viewBox="0 0 477 549"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="linearGradient-1" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop className="gradient-accent-start" offset="0%" />
            <stop className="gradient-accent-end" offset="100%" />
          </linearGradient>

          <linearGradient id="linearGradient-2" x1="50%" y1="0%" x2="50%" y2="99.6929191%">
            <stop className="gradient-flame-start" offset="0%" />
            <stop className="gradient-flame-end" stopOpacity="0" offset="100%" />
          </linearGradient>

          <linearGradient id="linearGradient-3" x1="100%" y1="100%" x2="100%" y2="0%">
            <stop className="gradient-accent-start" offset="0%" />
            <stop className="gradient-accent-end" offset="100%" />
          </linearGradient>
        </defs>

        <g fill="none" fillRule="evenodd">
          <g>
            <g id="rocket-01" transform="translate(171,0)">
              <path
                className="rocket-body"
                d="M79.7266842,0 C21.0677259,70.8293925 7.03751832,168.40158 48.352602,259.447674 L108.633142,259.447674 C147.480601,163.648882 135.706507,59.8343441 79.7266842,0 Z"
              />

              <ellipse
                fill="url(#linearGradient-1)"
                cx="77.1789474"
                cy="92.248062"
                rx="24.6315789"
                ry="24.7093023"
              />

              <path
                fill="url(#linearGradient-1)"
                d="M127.785996,191.908915 C124.395386,211.396638 119.874571,230.102007 113.305263,247.776091 C131.282564,255.919683 141.419077,273.913822 153.674722,314.631783 C159.290421,247.74053 156.21768,218.082207 127.785996,191.908915 Z"
              />

              <path
                fill="url(#linearGradient-1)"
                d="M27.3587209,191.908915 C30.3837149,211.224427 35.6950415,229.899646 42.6947368,247.756713 C24.7909935,255.902665 14.6959555,273.902019 2.49045665,314.631783 C-3.1374391,247.685569 -0.956629496,218.054221 27.3587209,191.908915 Z"
              />

              <path
                className="rocket-separator"
                d="M51.7263158,259.447674 L104.273684,259.447674 L101.04374,267.871788 C85.8664765,271.908343 71.0365186,272.118946 56.5885971,267.871788 L51.7263158,259.447674 Z"
              />

              <path
                fill="url(#linearGradient-1)"
                d="M74.6128466,191.933831 C69.9017068,234.60055 70.9643699,275.594761 78.7218105,314.631783 C84.2476586,271.609212 85.8062311,230.40149 82.0514882,191.684735 C80.7054483,182.041131 76.8444391,182.076716 74.6128466,191.933831 Z"
              />

              <path
                id="flame"
                fill="url(#linearGradient-2)"
                d="M59.194048,272.827586 C73.8345836,275.255963 87.4861812,275.371971 100,272.827586 L95,439.039005 L64.194048,439.039005 L59.194048,272.827586 Z"
              />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}
