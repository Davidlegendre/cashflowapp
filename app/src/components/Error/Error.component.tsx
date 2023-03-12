'use client'
import Image from "next/image"
import { useRouter } from "next/navigation"
import style from './error.module.css'
export default function ErrorComponent({error}: {error: Error}) {
    const router = useRouter()
    const volver = () => {
        router.push("/")
    }
    return (
        <div className={style.error}>
            <Image src="/error.gif" width={170} height={170} alt="error"/>
            <p>{error.message}</p>
            <button onClick={volver}>Volver al Inicio</button>
        </div>
    )
}