const datos = {
    generos: {},
    tipoidents: {}
};

const getGeneros = async () => { 
    const res = await fetch('http://localhost:4000/genero/all', {
        headers:{
            "apikey": "Key " + process.env.apikey,
        
        },
        cache: "no-store"
    })
    const result = await res.json()
    datos.generos = result
}

const getTipoidents = async () => { 
    const res = await fetch('http://localhost:4000/tipo-identificacion/all', {
        headers:{
            "apikey": "Key " + process.env.apikey,
        
        },  cache: "no-store"
    })
    const result = await res.json()
    datos.tipoidents = result
}

export default async function RegisterComponent(){
    await getGeneros();
    await getTipoidents();
    return datos
}