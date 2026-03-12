import SkillPill from "./SkillPill";
import "../css/components/Introduction.css";

const TOP_SKILLS = ["React", "Python", "CSS", "PostgreSQL", "Javascript"];

export default function Introduction() {
    return (
        <>
            <div className="intro-left">
                <h1 className="intro-header">
                    Nice to meet you
                </h1>
                <p className="intro-desc">
                    I am a fullstack developer based in Phoenix, Arizona. This is another sentence that I can say so I can see how I need to format this
                </p>
                <div className="top-skills-container">
                    <h1 className="intro-top-skills-header">
                        Top Skills
                    </h1>
                    <div className="skill-pills">
                        {TOP_SKILLS.map(skill => (
                            <SkillPill key={skill} label={skill} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="intro-right">
                <img
                    className="intro-photo"
                    src="/headshot.jpg"
                    alt="Evan Lunceford Headshot"
                />
            </div>
        </>
    );
}
