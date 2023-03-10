'use client'
export default function UserComponent(){
    
    return (
        <div className="form_campo">
            <p>Usuario</p>
            <div className="form_campo">
                <label>Nombre de Empresa:</label>
                <input type="text" name="nombre" id="nombre" placeholder="Nombre de Empresa" />
            </div>
            <div className="form_campo">
                <label>Email:</label>
                <input type="email" name="email" id="email" placeholder="Email" />
            </div>
        </div>
    )
}