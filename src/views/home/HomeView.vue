<script setup lang="ts">
import TheTop from '@/views/home/components/TheTop.vue'
import SearchView from '@/views/search/SearchView.vue'
import { useToggle } from '@/use/useToggle';
import { useAsync } from '@/use/useAsync'
import { fetchHomePageData } from '@/api/home';
import { ICountdown, IHomeInfo } from '@/types';
import OpLoadingView from '@/components/OpLoadingView.vue';
import TheTransformer from '@/components/TheTransform.vue'
import ScrollBar from './components/ScrollBar.vue'
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
    }
</style>