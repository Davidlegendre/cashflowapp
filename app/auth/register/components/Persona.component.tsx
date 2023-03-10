'use client'
export default function PersonaComponent({generos, tipoIdents}: {generos: {}, tipoIdents: {}} ){
    const itemsgeneros = !generos ? <></> : generos.Data?.map((element: any)=>{
        return <option key={element
        ._id} value={element._id}>{element.descrip}</option>
    })

    const itemsidents = !tipoIdents ? <></> : tipoIdents.Data?.map((element: any)=>{
        return <option key={element
        ._id} value={element._id}>{element.descrip}</option>
    })

    return (
        <div className="form_campo">
            <p>Persona</p>
            <div className="form_campo_row">
                <div  >
                    <div className="form_campo">
                        <label>Nombre:</label>
                        <input type="text" name="nombre" id="nombre" placeholder="Nombre" />
                    </div>
                    <div className="form_campo">
                        <label>Apellido:</label>
                        <input type="text" name="apellido" id="apellido" placeholder="Apellido" />
                    </div>
                    <div className="form_campo">
                        <label>Email:</label>
                        <input type="text" name="email" id="email" placeholder="Email" />
                    </div>
                </div>
                <div>
                    <div className="form_campo">
                        <label>Telefono:</label>
                        <input type="number" name="telefono" id="telefono" placeholder="Telefono" />
                    </div>
                    <div className="form_campo">
                        <label>Identificacion:</label>
                        <input type="number" name="identificacion" id="identificacion" placeholder="Identificacion" />
                    </div>
                    <div className="form_campo">
                        <label>Tipo de Identificacion:</label>
                        <select name="tipoIdentificacion" id="tipoIdentificacion">
                            {itemsidents}
                        </select>
                    </div>   
                </div>
            </div>
            
                    
            <div className="form_campo">
                <label>Genero:</label>
                <select name="genero" id="genero">
                    {itemsgeneros}
                </select>
            </div>           
        </div>
    )
}