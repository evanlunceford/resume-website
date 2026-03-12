import "../../css/components/project-system/Planet.css";

export default function Planet({ id, title, image, description, time, lines, speed, distance, isSelected, onSelect }) {
    const orbitStyle = {
        width:      `${distance * 2}em`,
        height:     `${distance * 2}em`,
        marginTop:  `-${distance}em`,
        marginLeft: `-${distance}em`,
        animationDuration: speed,
    };
    const posStyle    = { animationDuration: speed };
    const planetStyle = { animationDuration: speed };

    return (
        <div id={id} className="orbit" style={orbitStyle}>
            <div className="pos" style={posStyle}>
                <div
                    className={`planet ${isSelected ? 'selected' : ''}`}
                    style={planetStyle}
                    onClick={() => onSelect(id)}
                >
                    <dl className={`infos ${isSelected ? 'visible' : ''}`}>
                        <dt>{title}</dt>
                        <dd className="infos-description">{description}</dd>
                        <dd>
                            <span>Time on project</span>
                            {time}
                        </dd>
                        <dd>
                            <span>Est. lines of code</span>
                            {lines}
                        </dd>
                    </dl>
                </div>
            </div>
        </div>
    );
}
