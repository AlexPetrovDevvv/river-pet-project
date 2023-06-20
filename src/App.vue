<template >
    <div class="app">
        <header-component/>
        <router-view  :key="$route.fullPath"></router-view>
    </div>
</template>
<script setup>
    import HeaderComponent from './components/entities/Header/Index.vue'
</script>
<style lang="sass">

</style>