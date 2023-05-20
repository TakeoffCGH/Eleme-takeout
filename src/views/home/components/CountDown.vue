<script setup lang="ts">
    import type { ICountdown } from '@/types';
    import {useCountDown} from '@/use/useCountDown'
    interface IProps{
        data:ICountdown
    }
    const props = defineProps<IProps>()

    const countDown = useCountDown({
        time:props.data.time
    })

    //开始计时
    countDown.start()
    const {current} = countDown
    const padStart = (num:number) =>{
        return num.toString().padStart(2,'0')
    }
</script>

<template>
    <div class = "home-countdown">
        <div class="home-countdown__info">
            <img class="logo" src="@/assets/imgs/index_page/count-down.png" alt="">
            <span class="number">{{ padStart(current.hours) }}</span>
            <span class="colon">:</span>
            <span class="number">{{ padStart(current.minutes) }}</span>
            <span class="colon">:</span>
            <span class="number">{{ padStart(current.seconds) }}</span>
        </div> 
        <div  class="home-countdown__goods"> 
            <img  class="goods-img" :src="data.goods.imgUrl" alt="">
            <div class="goods-name op-ellipsis">{{ data.goods.name }}</div>
            <div class="goods-price">
                <span class="goods-price__now">
                    ￥<span>{{ data.goods.price }}</span>
                </span>
                <span class="goods-price__old">
                    ￥{{ data.goods.oldPrice }}
                </span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .home-countdown{
        border-radius:8px;
        width: 180px;
        height: 170px;
        background: linear-gradient(to bottom,rgb(252,202,202),white,white,white);
        padding: 15px 10px;
        box-sizing: border-box;  //方便地控制盒子的大小，避免因内边距和边框的宽度导致布局出现问题
        justify-content: flex-end;

        &__info{
            display: flex;
            align-items: center;
            .logo{
                width: 80px;
                margin-right: 8px;
            }
            .number{
                border-radius: 2px;
                width: 16px;
                padding: 2px;
                background: rgb(252, 78, 78);
                color: white;
                font-size: 12px;
                font-weight: bold;
            }
            .colon{
                margin: 0 1px;
                color: red;
            }
        }

        &__goods{
            margin-top: 8px;
            .goods-img{
                width: 160px;
                height: 74px;
                margin-bottom: 4px;
            }
            .goods-price{
                align-items: baseline; //设置大小不同的文字在同一基线上
                font-size: 12px;
                &__now{
                    color: red;
                    margin-right: 4px;
                    span{
                        font-weight: bold;
                        font-size: 16px;
                    }
                }
                &__old{
                    text-decoration: line-through;
                }
            }
        }
    }
</style>