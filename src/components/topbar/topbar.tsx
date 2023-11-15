import "./topbar.css"
import { useEffect, useState } from "react"


export const Topbar = () =>{

    const [style, setStyle] = useState("header");

    const onScroll = () => {
        const scrollTop =
            document.body.scrollTop || document.documentElement.scrollTop;
        
            if(scrollTop < 325){
                setStyle("header")
            }
            // 325 hidden
            if(scrollTop > 325 && scrollTop < 530){
                setStyle("hidden")
            }
            if(scrollTop > 530 && scrollTop < 940){
                setStyle("header")
            }
            if(scrollTop > 940){
                setStyle("black")
            }
      };
    
      useEffect(() =>{
          window.addEventListener("scroll", onScroll);
      }, [])

    return(
        <div className={`topbar ${style}`}>
            <nav>
                <ol className="bar-list">
                    <li><a href="#header">Home</a></li>
                    <li><a href="#details">Details</a></li>
                    <li><a href="#resume">Resume</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ol>
            </nav>
        </div>
    )
}