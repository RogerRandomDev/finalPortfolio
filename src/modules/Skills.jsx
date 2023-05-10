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
    
    const createPolygonBacks=(s)=>{
        //creates a point set the same size as the current skill set to round around the edges of it
        for(var i=4;i>=0;i--){
        var e=SKILLS[s].map((a)=>{return {"name":"","level":(4-i)/5+0.2}})
        var newPointsBack=compilePoints(e,true);
        anime({
            targets:[`.skillPolygonBack${i}`],
            'points':newPointsBack,
            duration:100,
            easing:'linear'
        })
    }
    }
    
    const compilePoints=(pointList,ignoreText=false)=>{
        var skillCount=pointList.length
        var skillTexts=[]
        var newPoints=pointList.map((skill,i)=>{
            var newLast=[Math.round(skill.level*Math.sin((i/skillCount)*Math.PI*2)*1000)/10,Math.round(skill.level*Math.cos((i/skillCount)*Math.PI*2)*1000)/10 ].join(" ")
            var txt=<text key={i} x={Math.sin((i/skillCount)*Math.PI*2)*110-(skill.name.length*10)*((i/skillCount > 0.5))} y={Math.cos((i/skillCount)*Math.PI*2)*110-(-16*(i/skillCount+0.25 <= 0.5))} className="text-center text-lg" >{skill.name}</text>;
            skillTexts.push(txt)
            return newLast
        }).join(" ")
        if(!ignoreText){setSkillText(skillTexts)}
        return newPoints
        
    }
    //compiles the points for the skills
    useEffect(()=>{
        var newPoints=compilePoints(SKILLS.Languages)
        anime({
            targets:['.skillPolygon'],
            'points':newPoints,
            duration:100,
            easing:'linear'
        })
        //creates the outer edge
        createPolygonBacks("Languages");
        const container=document.getElementsByClassName("floatySkillsContainer")[0]
        container.innerHTML=container.textContent.replace(/\S/g,"<div class=\"floatySkills\">$&</div>")
        setTimeout(()=>{

            anime.timeline({loop: true})
            .add({
              targets: '.floatySkills',
              translateY:[0,-10,0],
              easing: "linear",
              duration: 250,
              delay: (el, i) => 25 * i+250
            })
         },50)
    },[])

    useEffect(()=>{
    },[skillText])
    
    
    return (
        <>
        <div>
            <h1 className="text-3xl">SKILLS</h1>
            <p className="flex gap-1 floatySkillsContainer"
        >I have many</p>
        </div>
        <div className="bg-gray-950 border-solid border-4 border-gray-950 max-w-[95vw] lg:max-w-[100vw] lg:min-w-[50vw]">
            <h1>STATISTICS</h1>
            <div className="flex flex-row bg-gray-900">
                <div className="m-auto flex flex-col h-0 my-0">
                    {
                    //creates a button to change the current compiled points
                    Object.entries(SKILLS).map((s,i)=>{
                    return <button className="w-24 min-w-[6.5rem] sm:w-40 text-center bg-gray-600 border-2 rounded-sm border-gray-700 m-0.5 drop-shadow-md hover:drop-shadow-lg h-24 hover:bg-gray-500 duration-150" key={i+"opt"} onMouseDown={()=>{
                        //creates the new point set
                        var newPoints=compilePoints(SKILLS[s[0]]);
                        //animates points
                        anime({
                            targets:['.skillPolygon'],
                            'points':newPoints,
                            duration:100,
                            easing:'linear'
                        })
                        createPolygonBacks(s[0]);
                    }}>{s[0]}</button>
                }
                    )
                }
                </div>
                <div className="w-fit h-fit p-2 bg-gray-600 flex-grow min-h-[1rem] sm:min-h-[18rem] overflow-x-hidden">
                <svg className="max-w-[62.5vw] w-64 h-[15rem] sm:h-fit sm:w-[25rem] max-h-[40rem] max-w-[100vw] m-auto lg:w-[45rem] " viewBox='-250 -150 500 300'>
                    <g fill='none' fillRule='evenodd'>
                        <polygon strokeWidth='1' style={{"fill":skillBackFill}} stroke={"#bebebe"} points='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0' className="skillPolygonBack0"></polygon>
                    </g>
                    <g fill='none' fillRule='evenodd'>
                        <polygon strokeWidth='1' style={{"fill":skillBackFill}} stroke={"#bebebe"} points='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0' className="skillPolygonBack1"></polygon>
                    </g>
                    <g fill='none' fillRule='evenodd'>
                        <polygon strokeWidth='1' style={{"fill":skillBackFill}} stroke={"#bebebe"} points='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0' className="skillPolygonBack2"></polygon>
                    </g>
                    <g fill='none' fillRule='evenodd'>
                        <polygon strokeWidth='1' style={{"fill":skillBackFill}} stroke={"#bebebe"} points='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0' className="skillPolygonBack3"></polygon>
                    </g>
                    <g fill='none' fillRule='evenodd'>
                        <polygon strokeWidth='1' style={{"fill":skillBackFill}} stroke={"#bebebe"} points='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0' className="skillPolygonBack4"></polygon>
                    </g>
                    <g fill='none' fillRule='evenodd'>
                        <polygon strokeWidth='1' style={{"fill":skillColorFill}} stroke={"#bebebe"} points='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0' className="skillPolygon"></polygon>
                    </g>
                    {skillText}
                </svg>
                </div>
            </div>
        </div>
        </>
    )
}


export default Skill