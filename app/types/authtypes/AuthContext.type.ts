import { SignInData } from "./SignInData.type"
import { User } from "./User.type"

export type AuthContextType = {
    EsAutenticado: boolean,
    User: User,
    SignIn: (data: SignInData) => Promise<void>
}