import axios from 'axios'
import { showDialog } from 'vant'
import { useLocalStorage } from '@/use/useLocalStorage'
const instance = axios.create({
    baseURL:'/api'
})

instance.interceptors.request.use((config)=>{
    const { value:token  } = useLocalStorage('token','')
    if(config.headers && token.value){
        config.headers['x-token'] = token.value  //后端往config.headers添加的x-token
    }
    return config
})


instance.interceptors.response.use((response)=>{
    const {data:_data} = response
    const {data,code,msg} = _data
    if(code !== 0){
        showDialog({
            title: '标题',
            message:msg.name
        }).then(()=>{
            //关闭弹窗的逻辑
        })
        return Promise.reject(msg)
    }
    return data
})

export default instance