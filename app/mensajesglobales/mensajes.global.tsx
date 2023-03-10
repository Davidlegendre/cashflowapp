'use client'

export default function Mensaje({mensaje, isOpen})
{
    const open = isOpen?"openmsn": ""
    return <div className={"server_msn " + open}>
        <p>{mensaje}</p>
    </div>   
}