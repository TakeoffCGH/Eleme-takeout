export interface ILoginInfo {
    username: string
    password: string
  }
  
  export interface IUserInfo {
    id: number | string
    avatar: string  //头像
    nickname: string  //用户名
  }
  
  export interface IAuth {
    userInfo: IUserInfo
    token: string
  }
  