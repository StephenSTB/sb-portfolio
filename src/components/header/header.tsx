import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.

import type { Container, Engine } from "tsparticles-engine";

import book from "../../images/book.png"

import "./header.css"

export const Header = () =>{

    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
        
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);

    return(
        <header className="header">
            <Particles 
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                        fpsLimit:100,
                        particles: {
                            color: {
                                value: "random",
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outModes: {
                                    default: "bounce",
                                },
                                random: false,
                                speed: 6,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 800,
                                },
                                value: 10,
                            },
                            opacity: {
                                value: 0.5,
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                value: { min: 100, max: 400 },
                            },
                        },
                        detectRetina: true,
                    }
                
                }
            />
            <div className="header-main-text">Stephen Bettis' Portfolio</div>
            <div className="header-desc-text">I am a Typescript Web3 developer who uses fullstack techniques to create Dapps. This project is a resume to display my work.</div>
            <div className="header-buttons">
                <a href="https://github.com/"><div className="project" ><img src={book} id="book-img"/>Project</div></a>
            </div>
        </header>
    )
}