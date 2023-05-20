<script setup lang="ts">
import { ref } from 'vue'
import TheTop from '@/views/home/components/TheTop.vue'
import SearchView from '@/views/search/SearchView.vue'
import { useToggle } from '@/use/useToggle';
import { useAsync } from '@/use/useAsync'
import { fetchHomePageData } from '@/api/home';
import { ICountdown, IHomeInfo } from '@/types';
import OpLoadingView from '@/components/OpLoadingView.vue';
import TheTransformer from '@/components/TheTransform.vue'
import ScrollBar from './components/ScrollBar.vue'
import  CountDown  from './components/CountDown.vue';
import  { PRIMARY_COLOR, TRANSPARENT } from '@/config'
import  { HOME_TABS } from './TabsConfig'
const recomments = [
    {
        value:1,
        label:'牛腩',
    },
    {
        value:2,
        label:'色拉'
    }
]
const [isSearchViewShown,toggleSearchView] = useToggle(false)
const { data,pending } = useAsync(fetchHomePageData,{
    searchRecomments:[],
    banner:[],
    transformer:[],
    scrollBarInfoList:[],
    countdown:{} as ICountdown,
    activities:[]
})

const tabBackgroundColor = ref(TRANSPARENT)
const onTabScroll = ({ isFixed }: { isFixed:boolean }) => {
    tabBackgroundColor.value = isFixed ? 'white' : TRANSPARENT
}

</script>


<template>
    <div class="home-page">
        <Transition name="fade">
            <SearchView v-if="isSearchViewShown" @cancel="toggleSearchView"/>
        </Transition> 
        <TheTop :recomments="recomments" @searchClick="toggleSearchView"/>
        <OpLoadingView :loading="pending" type="skeleton" >
            <div class="home-page__banner">
                <img v-for="v in data.banner" :key="v.imgUrl" :src="v.imgUrl">
            </div>
            <TheTransformer :data="data.transformer"/>
            <ScrollBar :data="data.scrollBarInfoList"/>
            <div class="home-page__activity">
                <CountDown :data="data.countdown"/>
                <VanSwipe 
                    class="home-page__activity__swipe" 
                    lazy-render indicator-color='white' 
                    :autoplay="3000">
                        <van-swipe-item v-for="swipeImage in data.activities" :key="swipeImage">
                            <img :src="swipeImage">
                        </van-swipe-item>
                </VanSwipe>
            </div>

            <VanTabs
                sticky
                offset-top="54px"
                :color="PRIMARY_COLOR"
                :background="tabBackgroundColor"
                @scroll="onTabScroll"
            >
                <VanTab  v-for="tab in HOME_TABS" :key="tab.value" :title="tab.title">
                    <div style="width: auto; height: 80px; border: 2px greenyellow;">
                        <span style="text-align: center;">{{ tab.value }}</span>
                    </div>
                </VanTab>
            </VanTabs>
        </OpLoadingView>
        
    </div>
</template>

<style lang = 'scss' scoped>
    .fade-enter-active,
    .fade-leave-active{
        transition: opacity 0.5s ease;
    }
    .fade-enter-from,
    .fade-leave-to{
        opacity: 0;
    }
    .home-page{
        background:  rgb(245, 245, 245);
        padding-bottom: 70px;

        &__banner{
            img{
                width: 100%;
                padding-top: 10px;
                background: white;
            }
        }

        &__activity{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 10px;
            &__swipe{
                border-radius: 8px;
                height: 170px;
                width: 180px;
                
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
        
    }
</style>