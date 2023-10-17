"use client"
import Link from 'next/link'
import styles from '../../../public/styles/page.module.css'
import {useRouter} from 'next/navigation'


export default function Home() {
  const router = useRouter();
  const navigate=(name: string)=>{
    router.push(name)
  }
  return (
    <main>
     <h1 className='headin'>Nested Routing</h1> 
     <Link href="/login" >Go to Admin Home Page</Link>
     <br />
     <br />
     <Link href="/about" >Go to Super Admin Login Page</Link>
     <br />
     <br /> 


     <div style={{marginLeft:"auto",marginRight:"auto",paddingLeft:15,paddingRight:15,height:728,width:700}} >
        <div style={{maxWidth:420,height:400,borderWidth:1,borderColor:"black",borderStyle:"solid",marginTop:30}}>


        </div>
     </div>



    </main>
  )
}


