import "./resume.css"

export const Resume = () =>{
    return(
        <div className="resume">
            <div className="resume-entry">
                <h2>Education<div className="underline"/></h2>
                <div className="resume-entry-sub">
                    <h2 className="main-subtitle">Iowa State University</h2>
                    <div className="subtitle"><p className="italic-entry">Bachelors of Computer Science</p> <ul><li>Dec 2019</li></ul></div>
                    <p>During college I studied all topics relating to computers from Digital logic to Advanced Programing. 
                        For my foucused coursework I decided to study Computer Networking and Distributed Systems in preperation for Decentralized Application development.</p>
                </div>
            </div>
            <div className="resume-entry">
                <h2>Projects<div className="underline"/></h2>
                <div className="resume-entry-col">
                    <div className="resume-entry-sub">
                        <h2 className="main-subtitle">Crypto Ricks</h2>
                        <div className="subtitle"><p className="italic-entry">Crypto Art</p> <ul><li>Mar-April / Aug-Sept 2023</li></ul></div>
                        <p>Crypto Ricks is a Crypto Art NFT project built on Ethereum and IPFS utilizing VRF randomization to create 1000 unique NFTs. 
                            This project demonstrates the digital asset distribution protocol I developed to create strong ownership. Read more about this project 
                            <a className="project-link" href="https://github.com/StephenSTB/stephens-dapp/tree/master/webpage">here.</a></p>
                    </div>
                    <div className="resume-entry-sub">
                        <h2 className="main-subtitle">Stephens' Dapp</h2>
                        <div className="subtitle"><p className="italic-entry">Digital Asset Ditribution</p> <ul><li>Jan-Feb 2023</li></ul></div>
                        <p>Stephens' Dapp is a Public Goods, Soulbound, Non-Fungible Decentralized Application. The Application utilizes Ethereum and IPFS to create a true Web3 application. 
                            Read more about this project <a className="project-link" href="https://github.com/StephenSTB/crypto-ricks">here.</a> </p>
                    </div>
                    <div className="resume-entry-sub">
                        <h2 className="main-subtitle">Solidity Contracts</h2>
                        <div className="subtitle"><p className="italic-entry">Smart Contracts</p> <ul><li>2017-2023</li></ul></div>
                        <p> View some of the contracts I have been working on <a className="project-link" href="https://github.com/StephenSTB/solidity-contracts">here. </a>
                            Take note of Feed a completed smart contract suite for a decentralized social media platform.
                        </p>
                    </div>
                </div>
            </div>
            
            <div className="resume-entry">
                <h2>Skills Proficiency<div className="underline"/></h2>
                <div className="resume-entry-col">
                    <div className="resume-entry-sub">
                        <h3>Solidity</h3>
                        <div className="resume-skill">
                            <div className="solidity-skill"/>
                        </div>
                    </div>
                    <div className="resume-entry-sub">
                        <h3>IPFS</h3>
                        <div className="resume-skill">
                            <div className="ipfs-skill"/>
                        </div>
                    </div>
                    <div className="resume-entry-sub">
                        <h3>Typescript</h3>
                        <div className="resume-skill">
                            <div className="typescript-skill"/>
                        </div>
                    </div>
                    <div className="resume-entry-sub">
                        <h3>ReactJS</h3>
                        <div className="resume-skill">
                            <div className="react-skill"/>
                        </div>
                    </div>
                    <div className="resume-entry-sub">
                        <h3>NodeJS</h3>
                        <div className="resume-skill">
                            <div className="node-skill"/>
                        </div>
                    </div>
                    <div className="resume-entry-sub">
                        <h3>CSS</h3>
                        <div className="resume-skill">
                            <div className="css-skill"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}