export interface IMeInfo{
    superCard: ISuperCard
    cards: ICard[]
}

export interface ISuperCard{
    beanCount: number
    tips: string
}

export interface ICard {
    label: string,
    size: number,
    item: IItem[]
}

export interface IItem{
    count: number,
    iconUrl: string,
    label: string
}