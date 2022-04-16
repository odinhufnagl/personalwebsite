import React from "react";
import styles from "./index.module.css";
import image from "../../../../carbon (10).png";
const Content = () => {
  return (
    <div className={styles.Container}>
      <img src={image} className={styles.Image}></img>
      <ul style={{ maxWidth: 700 }} className={styles.List}>
        <li>React Native</li>
        <li>React</li>
        <li>Python</li>
        <li>Firebase</li>
        <li>Hasura</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>HTML & CSS</li>
        <li>Django</li>
        <li>MySQL</li>
        <li>GraphQL</li>
        <li>C++</li>
      </ul>
    </div>
  );
};

export default Content;
