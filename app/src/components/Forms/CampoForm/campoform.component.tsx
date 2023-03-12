export default function CampoForm () {
    return (
        <>
        <div className="form_campo">
            <label>Email:</label>
            <input type="email" name="email" id="email" placeholder="Email" />
        </div>
         <div className="form_campo">
         <label>Tipo de Identificacion:</label>
         <select name="tipoIdentificacion" id="tipoIdentificacion">
             
         </select>
     </div>  
     {/*<div className="form_campo">
                <label>Nombre de Empresa:</label>
                <input type="text" name="nombre" onChange={(e)=> setValid({...valid, empresanombre: e.target.value})} id="nombre" value={valid.empresanombre} placeholder="Nombre de Empresa" required />
    </div>*/}
        </>)
}