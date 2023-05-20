import type { ILoginInfo, IAuth } from "@/types/user";
import axios from './base'
export const auth = ({ username,password }: ILoginInfo) => {
    return axios.post<IAuth,IAuth>('auth',{
        username,
        password
    })
}