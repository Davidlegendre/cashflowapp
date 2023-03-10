'use client'

export default function Mensaje({mensaje, isOpen}: any)
{
    const open = isOpen?"openmsn": ""
    return <div className={"server_msn " + open}>
        <p>{mensaje}</p>
    </div>   
}