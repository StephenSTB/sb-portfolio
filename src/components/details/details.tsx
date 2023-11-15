import "./details.css"

import self from "../../images/Self.svg"


export const Details = () =>{
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
                            <p>SB Labs</p>
                            <p>180 Fountain View Dr</p>
                            <p>Ames, Iowa, 50010</p>
                            <p>515-450-0780</p>
                            <p>StephenSTB@live.com</p>
                        </div>
                        
                        <a href="../../ResumeJavascript.docx" download="Resume"><div className="resume-download">Download Resume</div></a>
                    </div>
                </div>
            </div>
        </div>
    )
}