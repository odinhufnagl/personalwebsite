import React, { useEffect } from "react";
import styles from "./index.module.css";
import ProjectAlgoVisualizer from "./ProjectAlgoVisualizer";

const LatestProject = () => {
  return (
    <div className={styles.Container} id="projects">
      <h2 className={styles.Header}>Latest project</h2>
      <ProjectAlgoVisualizer></ProjectAlgoVisualizer>
    </div>
  );
};

export default LatestProject;
