
'use client'
export default function EmpresaComponent({setValid, valid}: any){
   
    return (
        <div className="form_campo">
            <p>Empresa</p>
            <div className="form_campo">
                <label>Nombre de Empresa:</label>
                <input type="text" name="nombre" onChange={(e)=> setValid({...valid, empresanombre: e.target.value})} id="nombre" value={valid.empresanombre} placeholder="Nombre de Empresa" required />
            </div>
            <div className="form_campo">
                <label>Email:</label>
                <input type="email" name="email" value={valid.empresaemail} onChange={(e)=> setValid({...valid, empresaemail: e.target.value})} id="email" placeholder="Email" required/>
            </div>
        </div>
    )
}