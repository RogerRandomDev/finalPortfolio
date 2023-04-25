import {useEffect,useState} from 'react'
import anime from 'animejs';
import SKILLS from '../skill.json'

var skillColor="#000000";
var skillColorFill="#22222d";






function Skill(){

    const [skillSet,setSkills]=useState([])
    const [skillText,setSkillText]=useState([])
    const [skillPoints,setSkillPoints]=useState('')
    
    
    const compilePoints=(pointList)=>{
        var skillCount=pointList.length
        var skillTexts=[]
        var newPoints=pointList.map((skill,i)=>{
            var newLast=[Math.round(skill.level*Math.sin((i/skillCount)*Math.PI*2)*1000)/10,Math.round(skill.level*Math.cos((i/skillCount)*Math.PI*2)*1000)/10 ].join(" ")
            skillTexts.push(<text key={i} x={newLast.split(" ")[0]-(skill.name.length*12)*((i/skillCount > 0.5))} y={newLast.split(" ")[1]-(-20*(i/skillCount+0.25 <= 0.5))} className="text-center" >{skill.name}</text>)
            return newLast
        }).join(" ")
        setSkillText(skillTexts)
        return newPoints
        
    }
    
    useEffect(()=>{
        compilePoints(SKILLS.Languages)
    },[])

    useEffect(()=>{
    },[skillText])
    
    
    return (
        <div>
            <h1>SKILLS</h1>
            <div className="m-auto">
                {Object.entries(SKILLS).map((s,i)=>{
                return <button className=" w-40 text-center bg-gray-600 border-2 rounded-sm border-gray-700 m-0.5 drop-shadow-md hover:drop-shadow-lg" key={i+"opt"} onMouseDown={()=>{
                    var newPoints=compilePoints(SKILLS[s[0]]);
                    anime({
                        targets:['.skillPolygon'],
                        'points':newPoints,
                        duration:250,
                        easing:'linear'
                    })
                }}>{s[0]}</button>
            }
                )
            }
            </div>
            <svg className="w-[40rem] max-h-[40rem] max-w-[100vw] m-auto" viewBox='-225 -150 450 300'>
                <g fill='none' fillRule='evenodd'>
                    <polygon strokeWidth='1' style={{"fill":skillColorFill}} stroke={skillColor} points='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0' className="skillPolygon"></polygon>
                </g>
                {skillText}
            </svg>
            
        </div>
    )
}


export default Skill