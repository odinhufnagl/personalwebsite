import React from 'react'
import styles from "./index.module.css";
const MessageMini = (props) => {
    console.log(props)


    return (
    props.currentUser != props.data.user ? 
     <div className={styles.Bigcontainer}>
   

         <div style={{backgroundColor: "green", width: 25, height: 25,marginRight: 20, borderRadius: 50}}></div>

     <div className={styles.Container}>
        <p className={styles.Textname}>{props.data.user}</p>
         
         <p className={styles.Textmessage}>{props.data.message}</p>
         
         </div>

         </div>


    :

    <div className={styles.Bigcontainerright}>
   


     <div className={styles.Container}>
     <p className={styles.Textnameyou}>You</p>
         <p className={styles.Textmessage}>{props.data.message}</p>
         
         </div>
         <div style={{width: 25, height: 25, marginLeft: 20, borderRadius: 50, backgroundColor: "purple"}}></div>


         </div>





    )
}

export default MessageMini;
