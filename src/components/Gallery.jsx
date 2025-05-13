import React from "react";

export function Gallery() {
  return (
    <section className="gallery-foto-section">
      <div className="bar-divider">
        <span className="line"></span>
        <h2>GALLERY</h2>
        <span className="line"></span>
      </div>
      <div className="gallery-container">
        <div className="prewed">
          <img src="/img/prewed/DSC_6323.jpg" alt="test" />
        </div>
        <div className="prewed">
          <img src="/img/prewed/DSC_6302.jpg" alt="test" />
        </div>
        <div className="prewed">
          <img src="/img/prewed/DSC_6295.jpg" alt="test" />
        </div>
        <div className="prewed">
          <img src="/img/prewed/DSC_6264.jpg" alt="test" />
        </div>
        <div className="prewed">
          <img src="/img/prewed/DSC_6283.jpg" alt="test" />
        </div>
        <div className="prewed">
          <img src="/img/prewed/DSC_6263.jpg" alt="test" />
        </div>
      </div>
    </section>
  );
}
