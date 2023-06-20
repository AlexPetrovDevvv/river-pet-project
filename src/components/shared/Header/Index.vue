<template >
    <header class="header">
        <div class="container">
            <div class="header__button">
                <slot name="buttons"></slot>
            </div>
        </div>
    </header>
</template>
<script setup>
</script>
<style lang="sass">
    .header
        display: block
        position: fixed
        left: 0
        right: 0
        top: 0
        height: 80px
        padding: 10px 0
        display: flex
        align-items: center
        background-color: rgba(58, 57, 56, 0.7)
        .container
            display: flex
            align-items: center
        &__button
            display: flex
            align-items: center
            gap: 30px
</style>