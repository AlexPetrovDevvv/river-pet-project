<template >
    <header-template>
        <template #buttons>
            <button-component tag="a" href="#" text="Посмотреть данные"/>
            <button-component tag="a" href="#" text="Рассчитать данные" :white="true"/>
        </template>
    </header-template>
</template>
<script setup>
 import HeaderTemplate from '../../shared/Header/Index.vue'
 import ButtonComponent from '../../shared/Button/Index.vue'
</script>
<style lang="sass">

</style>