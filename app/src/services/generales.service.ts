export const getGeneros = async () => { 
    const res = await fetch(process.env.service + '/genero/all', {
        headers:{
            "apikey": "Key " + process.env.apikey,
        },
        cache: "no-store"
    })
    const result = await res.json()
    return result
}

export const getTipoidents = async () => { 
    const res = await fetch(process.env.service +'/tipo-identificacion/all', {
        headers:{
            "apikey": "Key " + process.env.apikey,
        
        },  cache: "no-store"
    })
    const result = await res.json()
    return result
}
