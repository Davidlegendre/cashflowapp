import { getGeneros } from "@/app/src/services/generales.service";
import MasterRegister from "./components/master.component";
import { getTipoidents } from '../../src/services/generales.service';
import { imageType } from '../../types/headerform.type';
import HeaderForm from '../../src/components/Forms/HeaderForm/Headerform.component';
export const metadata  = {
    title: "CashFlow - Registrar"
}
export default async function Register()
{
    const image: imageType = {
        src: "/icon.png",
        alt: "Vercel Logo",
        width: 38,
        height: 38
    }
    const generos = await getGeneros();
    const tipoidents = await getTipoidents();

    return (
        <div className="container">
                <div className="formulario">
                    <HeaderForm title="Registro" image={image}/>
                    <MasterRegister props={{generos, tipoidents}}></MasterRegister>     
                </div>
            </div>
    )
}