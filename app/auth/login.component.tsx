'use client'
import HeaderForm from "../src/components/Forms/HeaderForm/Headerform.component"
import { imageType } from "../types/headerform.type"
import { useRouter } from "next/navigation"
import { FormEvent } from 'react';

export default function LoginComponent() {
    const router = useRouter()
    const image: imageType = {
        src: "/favicon.ico",
        alt: "Vercel Logo",
        width: 38,
        height: 38
    }
    const RegisterPage = (e: FormEvent) => {

        e.preventDefault()
        router.push("/auth/register")
    }
    
    return(
        <div className="container">
                <form className="formulario">
                    <HeaderForm title="Login" image={image}/>
                    <div className="form_campo">
                        <label>Email:</label>
                        <input type="email" name="email" id="email" placeholder="Email" />
                    </div>
                    <div className="form_campo">
                        <label>Password:</label>
                        <input type="password" name="pass" id="pass" placeholder="Contraseña" />
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