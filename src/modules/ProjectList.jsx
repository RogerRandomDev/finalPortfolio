import {useState,useEffect} from 'react';
import anime from 'animejs/lib/anime.es.js';
function ProjectList(props){
    var out=[]
    
    const [currentShown,updateCurrent]=useState(props.projects.length)
    const listLength=4;
    out=props.projects.map((project,i)=>{
        const activeDist=i-currentShown;
        
        var nI=(((activeDist-listLength)%props.projects.length)+listLength*2)
        var offset=((nI)%props.projects.length);
        if(i==0){console.log(nI-listLength)}
        var dist=1.-Math.abs((nI-listLength)/listLength)
        return (
            <a key={i+"p"} className="flex flex-col flex-shrink-0 w-48 h-60 text-xl bg-gray-800 drop-shadow hover:drop-shadow-lg duration-100" style={{"opacity":dist,'transform':`translateX(${-12.5*(offset%(listLength*2)+i-listLength)}rem)`}} href={project.projectLink}>
                <p>{project.name+i}</p>
                <img src={project.imageLink} className="m-auto max-h-40 max-w-[36.4rem]"/>
                <p className="bottom-0 relative">{project.projectType}</p>
            </a>
        )
    })
    
    return <div className="min-w-[100vw]" onWheel={(ev)=>{
        updateCurrent(((currentShown+Math.sign(ev.deltaY))-listLength-props.projects.length)%props.projects.length+listLength+props.projects.length)}}>
            <div className="flex gap-2 overflow-visible flex-nowrap max-w-[12rem] m-auto">{out}</div>
        </div>;
}


export default ProjectList