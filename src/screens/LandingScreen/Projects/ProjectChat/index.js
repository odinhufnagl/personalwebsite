import React, { useEffect } from "react";

import ChatScreenMini from "./components/ChatScreenMini";
import styles from "./index.module.css";

const ProjectChat = () => {
  return (
    <div className={styles.Container}>
      <h2 className={styles.Text}>
        <span style={{ color: "#66FCF1" }}>Chat</span> with People around the
        globe. In Real Time
      </h2>

      <div className={styles.Chatscreencontainer}>
        <div id={"card"} className={styles.Card}>
          <ChatScreenMini></ChatScreenMini>
        </div>
      </div>
    </div>
  );
};

export default ProjectChat;
