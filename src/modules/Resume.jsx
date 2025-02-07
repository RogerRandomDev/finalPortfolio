import { useEffect } from 'react'
import ResumeData from '../resume.json'

function Resume(){

    var workExperience=[]
    var skillSet=[]
    var achievements=[]
    var projects=[]
    
    achievements=ResumeData.achievements.map((achievement, index)=>{
        return (
            <li key={index} className="list-disc text-gray-300">
                <p>{achievement}</p>
            </li>
        )
    })
    skillSet=ResumeData.skills.map((skill, index)=>{
        return (
            <li key={index} className="text-gray-300">
                <p>{skill}</p>
            </li>
        )
    })
    workExperience=ResumeData.workExperience.map((experience, index)=>{
            return (
            <li key={index} className="text-gray-300">
                <p>Location: {experience.location}</p>
                <p>Duration: {experience.duration}</p>
                <p>Position: {experience.position}</p>
                <p>Accomplishments:</p>
                <ul className="ml-8">
                    {experience.Accomplishments.map((accomplished, idx)=>{return <li key={idx}>{accomplished}</li>})}
                </ul>
            </li>
            )
        })
    projects=ResumeData.projects.map((project, index)=>{
            return (
            <li key={index} className="text-gray-300">
                <p>Project: {project.name}</p>
                <p>Description: {project.description}</p>
                <a href={project.link} className="text-blue-400 hover:underline">Link</a>
            </li>
            )
        })
    
    return (
        <>
        <h1 className="text-6xl text-gray-100">RESUME</h1>
        <div className="border-solid border-4 border-gray-700 min-w-[50vw] flex flex-col bg-[#1e1e1e] text-gray-100 rounded-md shadow-md max-w-[100vw] text-md sm:text-3xl">
            <div className="flex flex-row justify-evenly flex-grow">
                <div className="text-left border-solid border-b-4 border-gray-700 min-w-max h-min p-1 text-sm">
                    <p>Name: {ResumeData.Name}</p>
                    <p>Email: {ResumeData.Email}</p>
                    <p>Phone: {ResumeData.PhoneNumber}</p>
                </div>
                <div className="text-center w-[100%] border-solid border-l-4 border-b-4 border-gray-700 flex-grow text-[4vw] sm:text-2xl -mb-4">
                    <p>Backend and Video Game<br/> Developer</p>
                </div>
            </div>
            
            <div className="flex flex-row border-solid border-b-4 border-gray-700">
                <div className="w-48 border-solid border-r-4 border-gray-700">
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
            <div className="ml-8"> 
                <h1 className="text-3xl sm:text-4xl">PROJECTS</h1>
                <ul className="text-md sm:text-xl text-left p-1">
                    {projects}
                </ul>
            </div>
            <div className="border-solid border-t-4 border-gray-700 text-gray-400">FUTURE RULER OF SOMETHING</div>
        </div>
        </>
    )
}

export default Resume
