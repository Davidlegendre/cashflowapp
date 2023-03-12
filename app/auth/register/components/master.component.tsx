'use client'
import EmpresaComponent from './Empresa.component';
import PersonaComponent from './Persona.component';
import UserComponent from './Users.component';
import { FormEvent, useState } from 'react';

import { formsRegistrosType } from '../../../types/registro.validate';
import { useRouter } from 'next/navigation';

export default function MasterRegister({props}: {props:any}){

    
    const router = useRouter()
    let time
    const [mensaje, setMensaje] = useState("")
    const [isOpen, setIsOpen] = useState(Boolean)
    const [valid, setValid] = useState(formsRegistrosType)
    const elements = [
        <EmpresaComponent key={"empresa"} setValid={setValid} valid={valid}></EmpresaComponent>,
        <PersonaComponent key={"persona"} generos={props.generos} tipoIdents={props.tipoidents}></PersonaComponent>,
        <UserComponent key={"users"}></UserComponent>
    ]

    const verificar = () => {
       // let result;
       
        setIsOpen(false)
        time = null
        /*switch(num)
        {
            case 0:
                result = verificarEmpresa(valid)
                setMensaje(result.mensaje)
                setIsOpen(true)                
                break;
            case 1: 
                result = verificarPersona(valid)
                setMensaje(result.mensaje)
                setIsOpen(true)
                break;
        } */
        setMensaje("este es el mensajero")
        setIsOpen(true)
        time = setTimeout(() => { 
            setIsOpen(false)
        }, 5000,[])
    }

    const [num, setNum] = useState(0)

    const next = () => {
        verificar()
        if(num < elements.length -1)
            setNum(num + 1)
    }

    const back = () => {
        if(num !== 0)
        {
            verificar()
            if(num > 0)
                setNum(num - 1)
        }
        else
            router.push("/auth")
    }

    const Submit = (e: FormEvent) => {
        e.preventDefault()        
    }

    

return(
   <>
    <form onSubmit={(e) => Submit(e)}>
        {elements[num]}
        <div className="form_buttons">
            <input type="button" onClick={back} value={num === 0 ? "Login": "Atras"}/>
            <input type="button" onClick={next} value={num === elements.length - 1 ? "Guardar": "Adelante"} />
        </div>        
    </form>
     </>
    )
}