'use client'
import HeaderForm from "../src/components/Forms/HeaderForm/Headerform.component"
import { imageType } from "../types/headerform.type"
import { useRouter } from "next/navigation"
import { FormEvent, useState } from 'react';
import { signIn } from "next-auth/react";
import Loading from './loading';

export default function LoginComponent() {
    
    const router = useRouter()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [enabled, setEnabled] = useState(true)

    const image: imageType = {
        src: "/icon.png",
        alt: "Vercel Logo",
        width: 38,
        height: 38
    }
    const RegisterPage = (e: FormEvent) => {
        e.preventDefault()
        router.push("/auth/register")
    }
    

    const Submit = async(e: FormEvent) => {
        e.preventDefault();
        setEnabled(false)
        const a =  await signIn('credentials', { redirect: false, password: password, email: email })
        
        const urldestino = a?.url?.split('=')[1]
        if(!urldestino)
            router.push("/home")
        else
            router.push(urldestino)

    }

    if(!enabled)
        return <Loading mensaje="iniciando sesion"></Loading>
    else
    return(
        <div className="container">
                <form className="formulario" onSubmit={Submit} method="post">
                    <HeaderForm title="Login" image={image}/>
                    <div className="form_campo">
                        <label>Email:</label>
                        <input type="email" onChange={(e) => setEmail(e.target.value)} name="email" id="email" placeholder="Email" />
                    </div>
                    <div className="form_campo">
                        <label>Password:</label>
                        <input type="password" onChange={(e) => setPassword(e.target.value)} name="pass" id="pass" placeholder="Contraseña" />
                    </div>
                    <div>
                        <div className="form_buttons">
                            <input type="submit" value="Iniciar Sesion" />
                            <button onClick={(e) => RegisterPage(e)}>
                                Registrarse
                            </button>
                        </div>
                        <a href="#">Cambiar mi contraseña</a>
                    </div>
                </form>
            </div>
    )
}