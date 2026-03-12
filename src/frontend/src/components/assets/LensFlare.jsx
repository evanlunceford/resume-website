import "../../css/components/assets/LensFlare.css";

export default function LensFlare() {
    return (
        <div className="lens-flare">
            {/* Anamorphic horizontal streaks — the classic cinematic look */}
            <div className="lf-streak lf-streak-core" />
            <div className="lf-streak lf-streak-bloom" />
            <div className="lf-streak lf-streak-thin" />

            {/* Circular ghost artifacts scattered along the flare axis */}
            <div className="lf-ghost lf-ghost-1" />
            <div className="lf-ghost lf-ghost-2" />
            <div className="lf-ghost lf-ghost-3" />
            <div className="lf-ghost lf-ghost-4" />
            <div className="lf-ghost lf-ghost-5" />

            {/* Conic beam rays — narrow cones pivoting from center */}
            <div className="lf-conic lf-conic-1" />
            <div className="lf-conic lf-conic-2" />
            <div className="lf-conic lf-conic-3" />
        </div>
    );
}
