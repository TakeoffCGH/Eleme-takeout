export interface ISearchRecomment{
    value:number
    label:string
}

export interface IsearchResultList{
    list:IsearchResultList[]
}

export interface ISearchResult{
    type:number
    label:string
    resultCount:number
}

export interface IHomeInfo {
    searchRecomments: ISearchRecomment[]
    banner: IBanner[] 
    transformer: ITransformer[]
    scrollBarInfoList: IScrollBarInfo[]
    countdown: ICountdown
    activities: string[]
  }
  
  
  export interface ISearchRecomment {
    value: number
    label: string
  }
  
  export interface IBanner {
    imgUrl: string
  }
  
  export interface ITransformer {
    imgUrl: string 
    label: string
  }
  
  export interface IScrollBarInfo {
    type: string
    badge: string
    detail: string
    btn: string
  }
  
  export interface ICountdown {
    time: number
    goods: IGood
  }
  
  export interface IGood {
    imgUrl: string
    name: string
    price: number
    oldPrice: number
  }
  