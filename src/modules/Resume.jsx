import { useEffect } from 'react'
import ResumeData from '../resume.json'

function Resume(){

    var workExperience=[]
    var skillSet=[]
    var achievements=[]
    
    achievements=ResumeData.achievements.map((achievement)=>{
        return (
            <li className="list-disc">
                <p>{achievement}</p>
            </li>
        )
    })
    skillSet=ResumeData.skills.map((skill)=>{
        return (
            <li>
                <p>{skill}</p>
            </li>
        )
    })
    workExperience=ResumeData.workExperience.map((experience)=>{
            return (
            <li>
                <p>Location: {experience.location}</p>
                <p>Duration: {experience.duration}</p>
                <p>Position: {experience.position}</p>
                <p>Accomplishments:</p>
                <ul className="ml-8">
                    {experience.Accomplishments.map((accomplished)=>{return <li>{accomplished}</li>})}
                </ul>
            </li>
            )
        })

    

    return (
        <>
        <h1 className="text-6xl">RESUME</h1>
        <div className="border-solid border-4 border-gray-500 min-w-[50vw] flex flex-col bg-[#a5a5a5] text-black rounded-md shadow-md max-w-[100vw] text-md sm:text-3xl">
            <div className="flex flex-row justify-evenly flex-grow">
                <div className="text-left border-solid border-b-4 border-gray-500 min-w-max h-min p-1 text-sm">
                    <p>Name: {ResumeData.Name}</p>
                    <p>Email: {ResumeData.Email}</p>
                    <p>Phone: {ResumeData.PhoneNumber}</p>
                </div>
                <div className="text-center w-[100%] border-solid border-l-4 border-b-4 border-gray-500 flex-grow text-[4vw] sm:text-2xl -mb-4">
                    <p>Backend and Video Game<br/> Developer</p>
                </div>
            </div>
            

            <div className="flex flex-row border-solid border-b-4 border-gray-500">
                <div className="w-48 border-solid border-r-4 border-gray-500">
                    <h1>Skills:</h1>
                    <ul className="text-md sm:text-xl m-auto text-left p-1">
                        {skillSet}
                    </ul>
                </div>
                <div className="text-center m-auto">
                    <h1>Work Experience:</h1>
                        <ul className="text-md sm:text-xl m-auto w-max text-left p-1">
                            {workExperience}
                        </ul>
                </div>
            </div>
            <div className="ml-8"> 
                <h1 className="text-3xl sm:text-4xl">ACHIEVEMENTS</h1>
                <ul className="text-md sm:text-xl text-left p-1">
                    {achievements}
                </ul>
            </div>
            <div className="border-solid border-t-4 border-gray-500">FUTURE RULER OF SOMETHING</div>
        </div>
        </>
    )
}


export default Resume