<template >
    <header-template>
        <template #buttons>
            <button-component tag="a" href="#" text="Посмотреть данные"/>
            <router-link class="button button_white" :to="{name: 'form' }">Расчитать данные</router-link>
        </template>
    </header-template>
</template>
<script setup>
 import HeaderTemplate from '../../shared/Header/Index.vue'
 import ButtonComponent from '../../shared/Button/Index.vue'
</script>
<style lang="sass">

</style>