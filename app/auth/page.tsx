

import Image from "next/image"
import Link from "next/link"

export const metadata  = {
    title: "CashFlow - Login"
}

export default function Login()
{
    
    return(
        <div className="container">
                <form className="formulario">
                    <div className="header_form">
                        <Image src="/favicon.ico"
                            alt="Vercel Logo"
                            width={38}
                            height={38}
                            priority></Image>
                        
                        <p>Login</p>
                    </div>
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
                            <Link href="/auth/register" type="button" >
                                Registrarse
                            </Link>
                        </div>
                        <a href="#">Cambiar mi contraseña</a>
                    </div>
                </form>
            </div>
    )
}