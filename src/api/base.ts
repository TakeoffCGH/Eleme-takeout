import axios from 'axios'
import { showDialog } from 'vant'
const instance = axios.create({
    baseURL:'api'
})

// 设置请求拦截器
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