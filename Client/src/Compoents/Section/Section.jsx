import React from "react";
import "./Section.css";

const Section = () => {
  return (
    <div className="mainDiv">
      <div style={{ display: "flex" }}>
        <div style={{ width: "230px" }}>
          <h1>Quick setup</h1>

          <p>
            Connect Everhour with your tool and start tracking time right away.
            No manual project setup required.
          </p>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ width: "235px" }}>
          <h1>Native integration</h1>

          <p>
            Time tracking controls natively appears inside your project
            management tool, making it easy to track time.
          </p>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ width: "230px" }}>
          <h1>Automatic updates</h1>

          <p>
            Everhour syncs changes automatically. That means your reports will
            always show the freshest data.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section;
