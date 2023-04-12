
import anime from 'animejs/lib/anime.es.js';
function ProjectList(){
    var out=[]
    const childCount=6
    for(let i=1;i<childCount;i++){
        var rot=(180-180*i/ childCount - 90)
        var transformBy=-(Math.sin(Math.abs(rot)*Math.PI/180))*Math.sign(rot)*100
        console.log(transformBy)
        out.push(<div key={i} className="projectCard" style={{"transform":`rotateY(${rot}deg)`,margin:`0% ${transformBy}% `}}>aaa</div>)
    }
    return <div className="flex">{out}</div>;
}


export default ProjectList