export type User = {    
    userid: string,
    rol: string,
    name: string,
    apellido: string,
    email: string,
    img: string,
    empresa: {
        id: string,
        nombre: string,
        logo: string
    }
}