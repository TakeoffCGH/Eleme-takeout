import type { IHomeInfo } from "@/types";
import axios from "./base";

export const fetchHomePageData = ()=>{
    return axios.get<IHomeInfo>('home_page')
}