import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { IUserInfo } from '@/types'
import { useLocalStorage } from '@/use/useLocalStorage'

export interface IUserState {
  userInfo: IUserInfo
  token: string
}
 
const getDefaultUserInfo: () => IUserInfo = () => ({
  id: '',
  avatar: 'https://b.yzcdn.cn/vant/icon-demo-1126.png',
  nickname: '请登录',
})

export const useUserStore = defineStore('user', () => {
  //状态管理，从LocalStorage拿取，存储用户信息
  const {
    value: $userInfo,
    setValue: $setUserInfoValue,
    removeItem: $removeUserInfoItem,
  } = useLocalStorage('userInfo', getDefaultUserInfo())  

  //
  const { setValue: $setTokenValue, removeItem: $removeTokenItem } = useLocalStorage('token', '') 


  const state = ref({
    userInfo: getDefaultUserInfo(),
    token: '',
  })
  const getUserInfo = computed(() => {
    // 为什么不直接读 localStorage 的值呢？
    // 因为读取 localStorage 是比较耗时的操作，所以这里先读 store
    if (!state.value.userInfo || !state.value.userInfo.id) {
      state.value.userInfo = $userInfo.value
    }
    return state.value.userInfo
  })

  //以下setInfo函数由auth的api获取数据后调用,先存取到Pinia，然后存到localStorage
  const setInfo = ({ token, userInfo }: IUserState) => {  //初始化时，token为空,userInfo为Function
    state.value.userInfo = userInfo
    state.value.token = token
    //数据持久化token，存localStorage
    $setUserInfoValue(userInfo)
    $setTokenValue(token)
  }

  const removeInfo = () => {
    state.value.userInfo = getDefaultUserInfo()
    state.value.token = ''
    $removeUserInfoItem()
    $removeTokenItem()
  }
  return {
    state,
    getUserInfo,
    setInfo,
    removeInfo,
  }
})
