import React from 'react'
import styles from "./index.module.css"
import image from "../../../../carbon (10).png"
const Content = () => {
    return (
        <div className={styles.Container}>
            <img src={image} className={styles.Image}></img>
             <ul style={{maxWidth: 700}} className={styles.List}>
                <li>Python</li>
                <li>React</li>
                <li>React Native</li>
                <li>JavaScript</li>
                <li>HTML & CSS</li>
                <li>Django</li>
                <li>MySQL</li>
                <li>GraphQL</li>
                <li>C++</li>
                <li>Bubble.io</li>
                <li>Kivy</li>

            </ul>
            
        </div>
    )
}

export default Content;
