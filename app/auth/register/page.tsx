import Image from "next/image"
import RegisterComponent from '../server/Register';
import MasterRegister from "./components/master.component";


export default async function Register()
{
    
    const {generos, tipoidents} = await RegisterComponent()
    return (
        <div className="container">
                <div className="formulario">
                    <div className="header_form">
                        <Image src="/favicon.ico"
                            alt="Vercel Logo"
                            width={38}
                            height={38}
                            priority></Image>
                        
                        <p>Registrar</p>
                    </div>
                   <MasterRegister props={{generos, tipoidents}}></MasterRegister>     
                </div>
            </div>
    )
}