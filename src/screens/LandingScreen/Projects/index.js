import React, { useEffect } from "react";
import styles from "./index.module.css";
import ProjectCaptureIt from "./ProjectCaptureIt";
import ProjectChat from "./ProjectChat";
import { ProjectChessClock } from "./ProjectChessClock";
import Projectpitchit from "./ProjectPitchit";

const Projects = () => {
  /*
  useEffect(() => {
        window.onscroll = function () {
          console.log("scorlling")
          const projectchat = document.getElementById("projectchat");
          console.log("frrewfegrgw")
          if (document.documentElement.scrollTop >= 270){
            console.log("long scroll")
            projectchat.classList.remove("Notvisible")
            projectchat.classList.add("Visible")
          }
          
          
        }
        
      }, [])*/
  return (
    <div className={styles.Container} id="projects">
      <h2 className={styles.Header}>My projects</h2>
      <ProjectCaptureIt></ProjectCaptureIt>
      <Projectpitchit></Projectpitchit>
      <ProjectChat></ProjectChat>
      <ProjectChessClock></ProjectChessClock>
    </div>
  );
};

export default Projects;
