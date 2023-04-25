
import anime from 'animejs/lib/anime.es.js';
function ProjectList(props){
    var out=[]
    out=props.projects.map((project,i)=>{

        return (
            <a key={i+"p"} className="flex flex-col w-48 h-60 text-xl bg-gray-800 drop-shadow hover:drop-shadow-lg duration-300" href={project.projectLink}>
                <p>{project.name}</p>
                <img src={project.imageLink} className="m-auto max-h-40 max-w-[36.4rem]"/>
                <p className="bottom-0 relative">{project.projectType}</p>
            </a>
        )
    })
    
    return <div className="flex gap-2">{out}</div>;
}


export default ProjectList