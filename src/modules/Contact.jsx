import {useEffect,useState} from 'react'
import anime from 'animejs';



function ContactInfo(){
    return (
    <>
        <div className="mt-4 bg-gray-950 border-solid border-4 border-gray-950">
            <h1 className="text-5xl mb-1">CONTACT ME</h1>
            <div className="text-left bg-gray-800">
                <p>EMAIL: <a className="text-blue-500" >rgrang816@west-mec.edu</a></p>
                <p>PHONE: <a className="text-blue-500" >623-451-2201</a></p>
                <p>ITCH: <a className="text-blue-500" href="https://rogerrandomdev.itch.io/">https://rogerrandomdev.itch.io/</a></p>
            </div>
        </div>
    </>
    )
}



export default ContactInfo;