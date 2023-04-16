import axios from './base'
import { IsearchResultList} from '@/types'
export function fetchSearchData(key = ''){
    return axios.get<IsearchResultList,IsearchResultList>('home_search',{
        params:{_label_like:key}
    })
}