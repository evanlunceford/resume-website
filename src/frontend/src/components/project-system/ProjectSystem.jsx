import { useState } from "react";
import projects from "../../data/projects.json";
import Planet from "./Planet";
import SolarSun from "../assets/SolarSun";
import "../../css/components/project-system/ProjectSystem.css";

export default function ProjectSystem() {
    const [selected, setSelected] = useState(null);
    const toggle = (id) => setSelected(prev => prev === id ? null : id);

    return (
        <div id="universe" className="scale-stretched">
            <div id="galaxy">
                <div id="solar-system" className="view-2D">
                    <SolarSun />
                    {projects.map(p => (
                        <Planet
                            key={p.id}
                            {...p}
                            isSelected={selected === p.id}
                            onSelect={toggle}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
