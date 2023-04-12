
import anime from 'animejs/lib/anime.es.js';
var skillColor="#000000";
function Skill(){
    
    
    return (
        <div>SKILLS
            <svg>
                <g fill='none' fillRule='evenodd'>
                    <polygon strokeWidth='2' stroke={skillColor} points='70 50.898 84.864 61.697 79.186 79.171 60.814 79.171 55.136 61.697' className="skillPolygon"></polygon>
                </g>
            </svg>
        </div>
    )
}


export default Skill