import React from 'react'
import Content from './Content';
import styles from "./index.module.css"
const Skills = () => {
    return (
        <div className={styles.Container} id="skills">
              <h2 className={styles.Header}>Skills</h2>
           <Content></Content>
            
        </div>
    )
}

export default Skills;