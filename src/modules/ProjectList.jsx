import {useState,useEffect} from 'react';
import anime from 'animejs/lib/anime.es.js';
function ProjectList(props){
    var blockScroll=false;
    window.addEventListener('wheel',(ev)=>{if(blockScroll) ev.preventDefault();blockScroll=false},{passive:false})
    var out=[]
    const [lastScroll,setLastScroll]=useState(Date.now());
    const [currentShown,updateCurrent]=useState(props.projects.length)
    const listLength=4;
    var a=null;
    var lastTouch=null;
    out=props.projects.map((project,i)=>{
        const activeDist=i-currentShown;
        
        var nI=(((activeDist-listLength)%props.projects.length)+listLength*2)
        var offset=((nI)%props.projects.length);
        
        var dist=1.-Math.abs((nI-listLength)/listLength)
        return (
            <a key={i+"project"} className="flex flex-col flex-shrink-0 min-w-48 min-h-60 h-60 w-48 text-xl bg-gray-800 drop-shadow hover:drop-shadow-lg duration-100" style={{"opacity":dist,'transform':`translateX(${-12.5*(offset%((listLength+1)*2)+i-(listLength))}rem)`}} href={project.projectLink}>
                <p>{project.name}</p>
                <img src={project.imageLink} className="m-auto max-h-40 max-w-[36.4rem]"/>
                <p className="bottom-0 relative">{project.projectType}</p>
            </a>
        )
    })
    var alreadyShaky=false
    useEffect(()=>{
        const floaty=document.getElementsByClassName("floatyText")[0]
        if(!floaty) return
        floaty.innerHTML=floaty.textContent.replace(/\S/g,'<div class="floatingText inline-block">$&</div>')
        if(alreadyShaky){return}
        alreadyShaky=true
        setTimeout(() => {
            anime.timeline({loop: true})
            .add({
                targets: '.floatingText',
                color:['#aff','#aaf','#faa','#ffa','#ffa'],
                translateY:[0,8,0,-8,0],
                easing: "linear",
                duration: 500,
                delay: anime.stagger(37.5)
            })    
        }, 50);
        
    },[])
    
    return <> 
    <div className="mb-5">
       <h1 className="text-5xl">{props.TITLE}</h1>
    {(props.showInline?<p className="inline">Open Source, Find on my <a href="https://github.com/RogerRandomDev" className="floatyText">GitHub</a></p>:'')}
    </div>
    {/*Stores the project list here*/}
    <div className={'w-[80rem] w-max-[100vw] border-2 border-gray-950 border-solid bg-gray-900 overflow-x-hidden mb-40'}
    //begins motion for mobile devices
    onTouchStart={(ev)=>{
        lastTouch=ev
    }}
    //moves on mobile devices
    onTouchMove={(ev)=>{
        if(!lastTouch){lastTouch=ev;return}

        if(Math.abs(lastTouch.touches[0].clientX-ev.touches[0].clientX)<32) return
        var dir=Math.sign(lastTouch.touches[0].clientX-ev.touches[0].clientX)
        if(Date.now()-lastScroll<50) return
        lastTouch=ev
        
        
        
        setLastScroll(Date.now())
        updateCurrent(((currentShown-dir)-listLength-props.projects.length)%props.projects.length+listLength+props.projects.length)
    }}
    //reset lasttouch to prevent issues
    onTouchEnd={(ev)=>{
        lastTouch=null
    }}
    //scrolls horizontal for pc, and prevents scrolling when hovering
    onWheel={(ev)=>{
        var rect=ev.target.getBoundingClientRect();
        blockScroll=rect.y<=ev.clientY&&rect.y+rect.height>=ev.clientY
        
        if(Date.now()-lastScroll<50) return
        
        
        
        
        setLastScroll(Date.now())
        updateCurrent(((currentShown+Math.sign(ev.deltaY))-listLength-props.projects.length)%props.projects.length+listLength+props.projects.length)
        
        }}>
            <div className="flex gap-2 overflow-visible flex-nowrap max-w-[12rem] m-auto">{out}</div>
        </div>
        </>;
}


export default ProjectList