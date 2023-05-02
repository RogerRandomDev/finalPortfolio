import {useEffect,useState} from 'react'
import anime from 'animejs';
import SKILLS from '../skill.json'

var skillColor="#000000";
var skillColorFill="#22222d";
var skillBackFill="#222222"





function Skill(){

    const [skillSet,setSkills]=useState([])
    const [skillText,setSkillText]=useState([])
    const [skillPoints,setSkillPoints]=useState('')
    
    
    const compilePoints=(pointList,ignoreText=false)=>{
        var skillCount=pointList.length
        var skillTexts=[]
        var newPoints=pointList.map((skill,i)=>{
            var newLast=[Math.round(skill.level*Math.sin((i/skillCount)*Math.PI*2)*1000)/10,Math.round(skill.level*Math.cos((i/skillCount)*Math.PI*2)*1000)/10 ].join(" ")
            skillTexts.push(<text key={i} x={Math.sin((i/skillCount)*Math.PI*2)*100-(skill.name.length*12)*((i/skillCount > 0.5))} y={Math.cos((i/skillCount)*Math.PI*2)*100-(-20*(i/skillCount+0.25 <= 0.5))} className="text-center" >{skill.name}</text>)
            return newLast
        }).join(" ")
        if(!ignoreText){setSkillText(skillTexts)}
        return newPoints
        
    }
    
    useEffect(()=>{
        compilePoints(SKILLS.Languages)
    },[])

    useEffect(()=>{
    },[skillText])
    
    
    return (
        <div className="bg-gray-950 border-solid border-4 border-gray-950 border-b-0 -mt-4 max-w-[100vw] md:min-w-[50vw]">
            <h1>SKILLS</h1>
            <div className="flex flex-col sm:flex-row bg-gray-900">
                <div className="m-auto flex flex-row sm:flex-col sm:h-0 sm:my-0">
                    {Object.entries(SKILLS).map((s,i)=>{
                    return <button className=" w-40 text-center bg-gray-600 border-2 rounded-sm border-gray-700 m-0.5 drop-shadow-md hover:drop-shadow-lg sm:h-24" key={i+"opt"} onMouseDown={()=>{
                        var newPoints=compilePoints(SKILLS[s[0]]);
                        anime({
                            targets:['.skillPolygon'],
                            'points':newPoints,
                            duration:100,
                            easing:'linear'
                        })
                        var e=SKILLS[s[0]].map((a)=>{return {"name":"","level":1}})
                        var newPointsBack=compilePoints(e,true);
                        anime({
                            targets:['.skillPolygonBack'],
                            'points':newPointsBack,
                            duration:100,
                            easing:'linear'
                        })
                    }}>{s[0]}</button>
                }
                    )
                }
                </div>
                <div className="w-fit h-fit p-2 bg-gray-600 md:flex-grow">
                <svg className="w-[25rem] max-h-[40rem] max-w-[100vw] m-auto md:w-[45rem]" viewBox='-250 -150 500 300'>
                    <g fill='none' fillRule='evenodd'>
                        <polygon strokeWidth='1' style={{"fill":skillBackFill}} stroke={"#bebebe"} points='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0' className="skillPolygonBack"></polygon>
                    </g>
                    <g fill='none' fillRule='evenodd'>
                        <polygon strokeWidth='1' style={{"fill":skillColorFill}} stroke={"#bebebe"} points='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0' className="skillPolygon"></polygon>
                    </g>
                    {skillText}
                </svg>
                </div>
            </div>
        </div>
    )
}


export default Skill