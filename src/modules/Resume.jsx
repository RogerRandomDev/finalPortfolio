import { useEffect } from 'react'
import ResumeData from '../resume.json'

function Resume(){

    var workExperience=[]

    
    workExperience=ResumeData.workExperience.map((experience)=>{
            return (
            <li>
                <p>Location: {experience.location}</p>
                <p>Accomplishments:</p>
                <ul>
                    {experience.Accomplishments.map((accomplished)=>{return <li>{accomplished}</li>})}
                </ul>
            </li>
            )
        })

    

    return (
        <>
        <h1 className="text-6xl">RESUME</h1>
        <div className="border-solid border-4 border-gray-500 min-w-[50vw] flex flex-col bg-[#E5E5E5] text-black">
            <div className="flex flex-row">
                <div className="text-left border-solid border-b-4 border-r-4 border-gray-500 min-w-max h-min">
                    <p>Name: {ResumeData.Name}</p>
                    <p>Email: {ResumeData.Email}</p>
                    <p>Phone: {ResumeData.PhoneNumber}</p>
                </div>
                <div className="text-center w-[100%]">
                    <p>PUT SOMETHING HERE</p>

                </div>
            </div>
            <hr className="h-1 bg-black"/>

            <div>
                <h1>Work Experience:</h1>
                    <ul className="text-xl m-auto w-max text-left">
                        {workExperience}
                    </ul>
                <hr className="h-1 bg-black"/>
                <h1>Skills:</h1>
                    <ul className="text-xl m-auto w-max text-left">
                        {workExperience}
                    </ul>
            </div>
            <div>BOTTOM TEXT</div>
        </div>
        </>
    )
}


export default Resume