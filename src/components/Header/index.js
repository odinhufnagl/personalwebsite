import React from 'react'
import styles from "./index.module.css";
const Header = (props) => {
    return (
        <div className={styles.Container}>
           <h2 className={styles.Headertext} onClick={() => {document.getElementById("hero").scrollIntoView({ behavior: 'smooth' })}} style={{cursor: "pointer"}}>Odin Hufnagl</h2>
           <div className={styles.Rightcontainer}>
             
           <p onClick={() => {document.getElementById("projects").scrollIntoView({ behavior: 'smooth' })}}>Projects</p>
             
               <p onClick={() => {document.getElementById("aboutMe").scrollIntoView({ behavior: 'smooth' })}}>About me</p>
               <p onClick={() => {document.getElementById("skills").scrollIntoView({ behavior: 'smooth' })}}>Skills</p>
               <p onClick={() => {props.showDialog()}}>Contact</p>
               
           </div>
            
        </div>
    )
}

export default Header;