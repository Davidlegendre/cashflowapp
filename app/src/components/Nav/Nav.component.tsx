'use client'
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from './css/nav.module.css'
import { Rol } from "@/app/types/authtypes/rol.obj"
import Image from "next/image"
import Link from "next/link"
import UserMenu from './usermenu/Usermenu.component';
import Button from '../Button/button.component';
import { useSession } from 'next-auth/react';
import { AuthLoadingStatus } from '../../../types/authtypes/statusauth.enum';
import Loading from '@/app/loading';


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
    }
]
export default function Nav({children}: any)
{
    const {data: session, status}:{data: any, status: string} = useSession()
    const [openmenu, setOpenMenu] = useState(false)
    
    const pathname = usePathname()
    const router = useRouter()

    const navigate = () => {
        router.push("/auth")
    }
    const open = () => {
        setOpenMenu(!openmenu)
    }
    
    const itemsm =  session? [...itemmenu, {
        title: "Ordenes",
        href: "/home/ordenes"
    },
    {
        title: "Clientes",
        href: "/home/clientes"
    }] : itemmenu
   

    if(status === AuthLoadingStatus.loading)
        return <Loading></Loading>
    else
    return (
        <>
        <div className={styles.nav}>
            <div className={styles.navbar}>
                <Image src="/icon.png"
                                alt="Vercel Logo"
                                width={38}
                                height={38}
                                blurDataURL="/icon.png"
                                ></Image>
                                <p className={styles.indicator}>{itemmenu.find(e => e.href === pathname)?.title}</p>
                <div className={styles.menu + (openmenu? " " + styles.openmenu : "")}>
                    {itemsm.map(e=><Link key={e.href} href={e.href} className={pathname === e.href?styles.select: ""} >{e.title}</Link>)}
                </div>
            </div>
            <div className={styles.perfilandbutton}>
                 <div className={styles.perfil}>
                        {session ? <>
                            <p>{Rol.find(e=>e.code === session.user.persona.rol)?.descrip}</p>
                            <UserMenu imguser={session.user.persona.img} username={session.user.persona.name + " " + session.user.persona.apellido}></UserMenu>
                        </> : 
                        <>
                        <p>Invitado</p>
                        <Button click={navigate} classname={styles.perfilbtn} content="Login"/></>
                        }
                    </div>
                <Button click={open} classname={styles.menubtn} content="&#9776;"/>
            </div>
        </div>
            <div className={styles.childrens}>
                {children}
            </div>                            
       </>
    )
}