import "../../css/components/assets/SolarSun.css";

const RAYS = [
    { r: 255, g: 0,   b: 0,   angle: 0,     dur: '6s'   },
    { r: 255, g: 60,  b: 0,   angle: 25.7,  dur: '8.5s' },
    { r: 255, g: 127, b: 0,   angle: 51.4,  dur: '7s'   },
    { r: 255, g: 200, b: 0,   angle: 77.1,  dur: '9s'   },
    { r: 220, g: 255, b: 0,   angle: 102.9, dur: '6.5s' },
    { r: 80,  g: 255, b: 0,   angle: 128.6, dur: '8s'   },
    { r: 0,   g: 230, b: 60,  angle: 154.3, dur: '7.5s' },
    { r: 0,   g: 200, b: 180, angle: 180,   dur: '9.5s' },
    { r: 0,   g: 120, b: 255, angle: 205.7, dur: '6s'   },
    { r: 30,  g: 30,  b: 255, angle: 231.4, dur: '8s'   },
    { r: 75,  g: 0,   b: 180, angle: 257.1, dur: '7s'   },
    { r: 120, g: 0,   b: 230, angle: 282.8, dur: '9s'   },
    { r: 180, g: 0,   b: 255, angle: 308.6, dur: '7.5s' },
    { r: 255, g: 0,   b: 160, angle: 334.3, dur: '8.5s' },
];

export default function SolarSun() {
    return (
        <div className="solar-sun">
            <div className="sun-center-glow" />
            {RAYS.map(({ r, g, b, angle, dur }, i) => (
                <div
                    key={i}
                    className="sun-ray"
                    style={{
                        '--r': r,
                        '--g': g,
                        '--b': b,
                        '--angle': `${angle}deg`,
                        '--dur': dur,
                        '--delay': `${i * 0.4}s`,
                    }}
                />
            ))}
        </div>
    );
}
