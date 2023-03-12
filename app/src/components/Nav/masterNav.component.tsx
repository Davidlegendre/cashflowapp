'use client'

import Loading from "@/app/loading"
import { Rol } from "@/app/types/authtypes/rol.obj"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Suspense, useState } from "react"
import UserMenu from './usermenu/Usermenu.component';

const itemmenu = [
    {
        title: "Home",
        href: "/home"
    },
    {
        title: "Contacto",
        href: "/home/contacto"
    },
    {
        title: "About",
        href: "/home/about"
    },
    /*{
        title: "Ordenes",
        href: "/home/ordenes"
    },
    {
        title: "Clientes",
        href: "/home/clientes"
    }*/
]

export default function MasterNav({children, styles, person}: any) {
   
    const [openmenu, setOpenMenu] = useState(false)
    const pathname = usePathname()
    const router = useRouter()
    const navigate = () => {
        router.push("/auth")
    }
    const open = () => {
        setOpenMenu(!openmenu)
    }
    return (
        <>
        <div className={styles.nav}>
            <div className={styles.navbar}>
                <Image src="/icon.png"
                                alt="Vercel Logo"
                                width={38}
                                height={38}
                                priority></Image>
                                <p className={styles.indicator}>{itemmenu.find(e => e.href === pathname)?.title}</p>
                <div className={styles.menu + (openmenu? " " + styles.openmenu : "")}>
                    {itemmenu.map(e=><Link key={e.href} href={e.href} className={pathname === e.href?styles.select: ""} >{e.title}</Link>)}
                </div>
            </div>
            <div className={styles.perfilandbutton}>
                 <div className={styles.perfil}>
                        {person ? <>
                            <p>{Rol.find(e=>e.code === person.rol)?.descrip}</p>
                            <UserMenu imguser={person.img} username={person.name + " " + person.apellido}></UserMenu>
                        </> : 
                        <>
                        <p>Invitado</p>
                        <button onClick={navigate} className={styles.perfilbtn}>Login</button></>
                        }
                    </div>
                <button onClick={open} className={styles.menubtn}>&#9776;</button>
            </div>
        </div>
            <div className={styles.childrens}>
            {children}
            </div>
                            
       </>
    )
}