"use client"
import Link from 'next/link';
import {useRouter} from 'next/navigation'
const About=()=>{
    const router = useRouter();
    return(
        <div>
            <h1>SuperAdmin Login Page</h1>
            <button onClick={()=>router.push("/")} >Go to Home Page</button>

        <br />


        </div>
    )
}

export default About;