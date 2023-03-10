
'use client'
import styles from './css/nav.module.css'
import Image from "next/image"
import { useState } from 'react';
import Link from 'next/link';
import {  usePathname, useRouter  } from 'next/navigation';

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
    {
        title: "Ordenes",
        href: "/home/ordenes"
    },
    {
        title: "Clientes",
        href: "/home/clientes"
    }
]

export default function Nav({children}: any)
{
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
                <Image src="/favicon.ico"
                                alt="Vercel Logo"
                                width={38}
                                height={38}
                                priority></Image>

                <div className={styles.menu + (openmenu? " " + styles.openmenu : "")}>
                    {itemmenu.map(e=><Link key={e.href} href={e.href} className={pathname === e.href?styles.select: ""} >{e.title}</Link>)}
                </div>
            </div>
            <div className={styles.perfilandbutton}>
                <div className={styles.perfil}>
                    <p>Administrador</p>
                    <button onClick={navigate} className={styles.perfilbtn}>Login</button>
                </div>
                <button onClick={open} className={styles.menubtn}>menu</button>
            </div>
        </div>
            <div className={styles.childrens}>
            {children}
            </div>
                            
       </>
    )
}