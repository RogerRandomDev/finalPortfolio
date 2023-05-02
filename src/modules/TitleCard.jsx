import {useEffect,useState} from 'react'
import anime from 'animejs';


function TitleCard(){

    return (
        <>
            
            <div className="min-w-[100vw] min-h-[100vh] max-w-[100vw] max-h-[100vh] overflow-y-hidden mb-40" onMouseDown={()=>{
                anime.timeline({loop: false})
                .add({
                  targets: '.animatedTitle .myName .word',
                  scale: [14,1],
                  opacity: [0,1],
                  easing: "easeOutCirc",
                  duration: 800,
                  delay: (el, i) => 800 * i
                })
            }}>
                <img className="-mb-[100vh] min-w-[100vw] min-h-[100vh] h-[100vh]" src="https://img.freepik.com/free-vector/blue-futuristic-networking-technology_53876-100679.jpg?w=360" />
                <div className="mt-[40vh] -mt-[5rem] mx-auto w-max filter backdrop-blur-sm animatedTitle">
                    <h1 className="text-6xl myName flex flex-row"><span className="word mx-4">Roger </span><span className="word mx-4">Grange</span></h1>
                    <p>Maniacal plan to be determined</p>
                </div>
            </div>    
        </>
    )
}




export default TitleCard;