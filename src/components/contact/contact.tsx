import "./contact.css"
import { useEffect, useState } from "react"
import { send } from "@sb-labs/images"

import { Input, Textarea } from "@sb-labs/basic-components/dist"

export const Contact = () =>{

    const [name, setName] = useState("")
    const [message, setMessage] = useState("")
    const [textareaSize, setTextareaSize] = useState("")

    const d = new Date();

    const changeName = (e:any) => {
        setName(e.target.value);
    };

    const changeMessage = (e:any) => {
        setMessage(e.target.value);
        
    };

    
    const getWidth = () =>{
        console.log()
        setTextareaSize(window.innerWidth > 900 ? "medium" : "mini")
    }

    useEffect(()=>{
        window.addEventListener("resize", getWidth)
    }, [])


    return(
        <div id="contact">
            <div className="contact-title"><div className="contact-mail"><img src={send} className="mail-icon"/></div> &nbsp;&nbsp; To contact me via email fill in the form below.</div>
            <div className="contact-form">
                <div className="form-section">
                    <div className="name-title">&nbsp;&nbsp;Name*</div> 
                    <div className="contact-entry-input"><Input theme="dark" size="small"onChange={changeName}/></div>
                </div>
                <br/>
                <div className="form-section">
                    <div className="name-title">&nbsp;&nbsp;Message*</div> 
                    <div className="contact-entry-input"><Textarea theme="dark" size={textareaSize} onChange={changeMessage}/></div>
                </div>
            </div>
            <br/>
            <div className="send-email"> <a href = {`mailto:stephenstb@live.com?subject=Resume Webpage Contact - ${name}&body=${message}`}>
                Send Email
            </a></div>
            <br/><br/><br/>
            <div>&copy; SB Labs {d.getFullYear()}</div>
            <br/>
        </div>
    )
}