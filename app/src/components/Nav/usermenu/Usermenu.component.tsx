'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { signOut } from 'next-auth/react'
import style from "./usermenu.module.css"

const items = [
    {
        title: "Perfil",
        href: "/home/user"
    },
    {
        title: "Configuracion",
        href: "/home/user/config"
    },
    {
        title: "Mis Bancos",
        href: "/home/user/bancos"
    },
    {
        title: "Mis Clientes",
        href: "/home/user/clientes"
    }
]

export default function UserMenu({imguser, username}: {imguser: string, username: string}){

    const [openmenu, setOpenMenu] = useState(false)
    const open = () => {
        setOpenMenu(!openmenu)
    }

    const closeSession = async () => {
       await signOut({callbackUrl: "/"})
    }

    return (
        <div className={style.content}>
            <button onClick={open} className={style.userbtn}>
                <Image src={imguser} width={38} height={38} alt="users" priority></Image>
            </button>
            <div className={style.usermenu + (openmenu? " " + style.openmenu : "")}>
                <div className={style.headermenu}>
                    <Image src={imguser} alt="userimg" width={38} height={38} priority></Image>
                    <p>{username}</p>                   
                </div>
                <div className={style.itemsmenu}>
                    {items.map(e=><Link key={e.href} href={e.href}>{e.title}</Link>)}
                    <button className={style.btnclose} onClick={closeSession}>Cerrar Sesion</button>
                </div>
            </div>
        </div>
    )
}