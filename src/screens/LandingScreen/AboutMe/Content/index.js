import React from 'react'
import styles from "./index.module.css"
import image from "../../../../carbon (8).png";
const Content = () => {
    return (
    <div className={styles.Container}>

        <p className={styles.Content}>Hey, my name is <span style={{color: "#66FCF1"}}>Odin</span>. I am 18 years old and have a burning interest for programming and web/app development. From time to time I also participate in programming competitions. Earlier this year my knowledge in programming made me qualify to the finals of the swedish programmingolympiad.   </p>
        <img src={image} className={styles.Image}></img>
    </div>
       
    )
}

export default Content;
