import "./details.css"

import self from "../../images/Self.svg"
import { useEffect } from "react"

export const Details = () =>{

    useEffect(() =>{
        fetch("../../ResumeJavascript.docx").then(resp => resp.arrayBuffer()).then(arr =>{
            console.log(arr)
        })
    }, [])

    return(
        <div id="details">
            <div className="details-box">
                <div className="details-img-box">
                    <img src={self} className="details-img"/>
                </div>
                <div className="details-text">
                    <h2>About Me</h2>
                    <p>I have been developing decentrailized applications since 2017. I am notably proficient in Solidity, Typescript, React and Node.js. 
                        I designed and implemented a decentralized data distribution protocol enabling strong ownership of digital assests on the Ethereum blockchain. </p>
                    
                    <h2>Contact Details</h2>
                    <div className="contact-box">
                        <div className="details-contact">
                            <div>SB Labs</div>
                            <div>180 Fountain View Dr</div>
                            <div>Ames, Iowa, 50010</div>
                            <div>515-450-0780</div>
                            <div>StephenSTB@live.com</div>
                        </div>
                        <br/>
                        
                        <a href="../ResumeJavascript.docx" download="Resume"><div className="resume-download">Download Resume</div></a>
                    </div>
                    <br/>
                </div>
            </div>
        </div>
    )
}