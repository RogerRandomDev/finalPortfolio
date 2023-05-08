import {useEffect,useState} from 'react'
import anime from 'animejs';


function TitleCard(){
    useEffect(()=>{
        const classText=document.getElementsByClassName("myName")[0]
        classText.innerHTML=classText.textContent.replace(/./g,'<div class="word" style="min-width:1.5rem;">$&</div>')
        const descText=document.getElementsByClassName("myDesc")[0]
        descText.innerHTML=descText.textContent.replace(/./g,'<div class="word" style="min-width:0.375rem;">$&</div>')
        setTimeout(()=>{
            anime.timeline({loop: false})
            .add({
              targets: '.animatedTitle .myName .word',
              scale: [14,1],
              opacity: [0,1],
              easing: "easeOutCirc",
              duration: 800,
              delay: (el, i) => 200 * i
            });
            
    
        anime.timeline({loop: false})
        .add({
          targets: '.myDesc .word',
          rotateZ:[-90,0],
          opacity: [0,1],
          easing: "easeOutCirc",
          duration: 200,
          delay: (el, i) => 20 * i+3500
        });
        
    },50)
    setTimeout(()=>{
        anime.timeline({loop: true})
        .add({
          targets: '.myDesc .word',
          translateY:[0,-8,0],
          rotateY:[0,180,360],
          easing: "linear",
          duration: 400,
          delay: (el, i) => 25 * i
        });
    },4500)    
    },[])
    return (
        <>
            
            <div className="min-w-[100vw] min-h-[100vh] max-w-[100vw] max-h-[100vh] overflow-y-hidden">
                <img className="-mb-[100vh] min-w-[100vw] min-h-[100vh] h-[100vh]" src="https://i.gifer.com/J4o.gif" />
                <div className="mt-[40vh] -mt-[5rem] mx-auto w-max filter backdrop-blur-sm animatedTitle">
                    <h1 className="text-6xl myName flex flex-row center">Roger Grange</h1>
                    <p className="myDesc flex flex-row center">Maniacal plan to be determined</p>
                </div>
            </div>    
        </>
    )
}




export default TitleCard;