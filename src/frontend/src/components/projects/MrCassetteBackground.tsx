import "../../css/components/MrCassetteBackground.css";

export default function MrCassetteBackground({ className }: { className?: string }) {
  return (
    <div className={`mr-cassette-bg ${className ?? ""}`.trim()} aria-hidden="true">
      <div className="mr-cassette-container">
        <div className="mr-cassette-tape">
          <div className="mr-cassette-screws">
            {Array.from({ length: 4 }, (_, index) => (
              <div key={index} className="mr-cassette-screw">
                <div className="mr-cassette-screw-overflow">
                  <div />
                  <div />
                </div>
              </div>
            ))}
          </div>

          <div className="mr-cassette-header" />

          <div className="mr-cassette-body">
            <div className="mr-cassette-window">
              <div className="mr-cassette-spools">
                <div className="mr-cassette-spool">
                  <div className="mr-cassette-spoolbar">
                    <div />
                    <div />
                    <div />
                  </div>
                </div>

                <div className="mr-cassette-center-label" />

                <div className="mr-cassette-spool">
                  <div className="mr-cassette-spoolbar">
                    <div />
                    <div />
                    <div />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mr-cassette-footer">
            <div className="mr-cassette-holes">
              <div className="mr-cassette-hole mr-cassette-hole-radial" />
              <div className="mr-cassette-hole mr-cassette-hole-square" />
            </div>
            <div className="mr-cassette-screw mr-cassette-footer-screw">
              <div className="mr-cassette-screw-overflow">
                <div />
                <div />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
