import "../../css/components/assets/RainbowRays.css";

const RAYS = [
    { r: 255, g: 0,   b: 0,   angle: 0,     sway: '1deg',  dur: '6s'   }, // red
    { r: 255, g: 60,  b: 0,   angle: 25.7,  sway: '1deg',  dur: '8.5s' }, // red-orange
    { r: 255, g: 127, b: 0,   angle: 51.4,  sway: '1deg',  dur: '7s'   }, // orange
    { r: 255, g: 200, b: 0,   angle: 77.1,  sway: '1deg',  dur: '9s'   }, // yellow-orange
    { r: 220, g: 255, b: 0,   angle: 102.9, sway: '1deg',  dur: '6.5s' }, // yellow
    { r: 80,  g: 255, b: 0,   angle: 128.6, sway: '1deg',  dur: '8s'   }, // yellow-green
    { r: 0,   g: 230, b: 60,  angle: 154.3, sway: '1deg',  dur: '7.5s' }, // green
    { r: 0,   g: 200, b: 180, angle: 180,   sway: '1deg',  dur: '9.5s' }, // cyan
    { r: 0,   g: 120, b: 255, angle: 205.7, sway: '1deg',  dur: '6s'   }, // blue
    { r: 30,  g: 30,  b: 255, angle: 231.4, sway: '1deg',  dur: '8s'   }, // blue-indigo
    { r: 75,  g: 0,   b: 180, angle: 257.1, sway: '1deg',  dur: '7s'   }, // indigo
    { r: 120, g: 0,   b: 230, angle: 282.8, sway: '1deg',  dur: '9s'   }, // indigo-violet
    { r: 180, g: 0,   b: 255, angle: 308.6, sway: '1deg',  dur: '7.5s' }, // violet
    { r: 255, g: 0,   b: 160, angle: 334.3, sway: '1deg',  dur: '8.5s' }, // pink
];

export default function RainbowRays() {
    return (
        <div className="rainbow-rays">
            <div className="ray-center-glow" />
            {RAYS.map(({ r, g, b, angle, sway, dur }, i) => (
                <div
                    key={i}
                    className="rainbow-ray"
                    style={{
                        '--r': r,
                        '--g': g,
                        '--b': b,
                        '--angle': `${angle}deg`,
                        '--sway': sway,
                        '--dur': dur,
                        '--delay': `${i * 0.4}s`,
                    }}
                />
            ))}
        </div>
    );
}
