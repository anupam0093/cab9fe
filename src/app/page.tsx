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
    <h1>Home</h1>

    </main>
  )
}


