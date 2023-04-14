<script setup lang="ts">
import TheTop from '@/views/home/components/TheTop.vue'
import SearchView from '@/views/search/SearchView.vue'
import { useToggle } from '@/use/useToggle';
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
</script>


<template>
    <div class="home-page">
        <SearchView v-if="isSearchViewShown" @cancel="toggleSearchView"/>
        <TheTop :recomments="recomments" @searchClick="toggleSearchView"/>
    </div>
</template>

<style scoped>
    
</style>