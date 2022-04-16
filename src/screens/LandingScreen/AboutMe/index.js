import React from 'react'
import Content from './Content';
import styles from "./index.module.css";
import Skills from '../Skills';
const AboutMe = () => {
    return (
        <div className={styles.Container} id="aboutMe">
            <h2 className={styles.Header}>About me</h2>
            <Content></Content>
           
            
            
            
        </div>
    )
}

export default AboutMe;