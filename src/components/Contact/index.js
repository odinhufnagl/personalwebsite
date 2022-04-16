import { faArrowLeft, faBackspace, faCross } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useRef, useState } from 'react'
import styles from "./index.module.css";
const Contact = (props) => {

    const inputName = useRef();
    const inputEmail = useRef();
    const inputSubject = useRef();
    const inputMessage = useRef();

    const handleSubmit = req => {
        const template = "template_wj6c5uz";
        const userId = "user_DYzrQ1qMt310ZPYhs9iAM";
  
        window.emailjs.send('default_service', template, {from_name: inputName.current, from_mail: inputEmail.current, message: inputMessage.current, subject: inputSubject.current}, userId)
  
        props.hideDialog()
        alert("message sucessfully sent!")
        
    }

  
    
    return (
      
         <div className={styles.Container}>


             <FontAwesomeIcon icon={faArrowLeft} onClick={() => {props.hideDialog()}}style={{float: "left",fontSize: 30, cursor: "pointer", position: "absolute"}}></FontAwesomeIcon>

     
     
        

     
         

             <span className="contact1-form-title">
                 Get in touch
             </span>
             

             <div className="wrap-input1 validate-input" data-validate="Name is required">
                 <input className="input1" type="text" name="name" placeholder="Name" onChange={(e) => {inputName.current = e.target.value}}></input>
                 <span className="shadow-input1"></span>
             </div>

             <div className="wrap-input1 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                 <input className="input1" type="text" name="email" placeholder="Email" onChange={(e) => {inputEmail.current = e.target.value}}></input>
                 <span className="shadow-input1"></span>
             </div>

             <div className="wrap-input1 validate-input" data-validate="Subject is required">
                 <input className="input1" type="text" name="subject" placeholder="Subject" onChange={(e) => {inputSubject.current = e.target.value}}></input>
                 <span className="shadow-input1"></span>
             </div>

             <div className="wrap-input1 validate-input" data-validate="Message is required">
                 <textarea className="input1" name="message" placeholder="Message" onChange={(e) => {inputMessage.current = e.target.value}}></textarea>
                 <span className="shadow-input1"></span>
             </div>

             <div class="container-contact1-form-btn">
                 <button class="contact1-form-btn" onClick={() => {handleSubmit()}}>
                     <span>
                         Send Email
                         <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                     </span>
                 </button>
             </div>
         
 
 </div>

       




    )
}

export default Contact;