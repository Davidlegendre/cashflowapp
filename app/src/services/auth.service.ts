import { SignInData } from '@/app/types/authtypes/SignInData.type';
import { Registro } from '@/app/types/registertypes/registro.type';
export const signInService = async ({email, password}: SignInData) => {
    const result = await fetch(process.env.service + '/auth/login',{
        headers:{
            "apikey": "Key " + process.env.apikey,
            "content-type": "application/json"
        },
        cache: "no-store",
        body: JSON.stringify({
            "email": email,
            "password": password
        })
    })

    return await result.json()
}

export const Register = async (registro: Registro) => {
    const result = await fetch(process.env.service + '/auth/registrar/nuevo',{
        headers:{
            "apikey": "Key " + process.env.apikey,
            "content-type": "application/json"
        },
        cache: "no-store",
        body: JSON.stringify(registro)
    })

    return await result.json()
}