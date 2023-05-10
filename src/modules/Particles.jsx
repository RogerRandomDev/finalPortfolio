import { useEffect, useState} from "react";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function BackParticles(){
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
        setSize(document.body.getBoundingClientRect().height);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
    
    //handles resizing with the screen size
    const [sizeY,setSize]=useState(0);
    window.addEventListener('resize',()=>{
        setSize(document.body.getBoundingClientRect().height)
    })
    useEffect(()=>{},[sizeY])

    return (
        <Particles id="tsparticles"
        style={{'min-height':sizeY}}
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
            fullScreen:false,
            fpsLimit: 30,
            interactivity: {
                events: {
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                    resize: true,
                },
                modes: {
                    repulse: {
                        distance: 200,
                        duration: 1.,
                    },
                },
            },
            particles: {
                color: {
                    value: "#ffffff",
                },
                links: {
                    color: "#ffffff",
                    distance: 150,
                    enable: true,
                    opacity: 0.9,
                    width: 5,
                },
                collisions: {
                    enable: false,
                },
                move: {
                    directions: "none",
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
                        area: 1000,
                    },
                    value: 50,
                },
                opacity: {
                    value: 0.75,
                },
                shape: {
                    type: "square",
                },
                size: {
                    value: { min: 5, max: 20 },
                },
            },
            detectRetina: true,
        }}/>)
    }
    
export default BackParticles