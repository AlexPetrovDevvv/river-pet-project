<template >
    <component :is="tag" class="button" :class="{button_white: white}">
        {{ text }}
    </component>
</template>
<script setup>

    const props = defineProps({
        tag: {
            type: String,
            default: "button",
        },
        content: {
            type: String,
            default: "button",
        },
        white: {
            type: Boolean,
            default: false,
        },
    })

</script>
<style lang="sass">

    .button
        display: block
        padding: 15px 10px
        border-radius: 6px
        font-size: 16px
        font-weight: 400
        background-color: var(--orange)
        color: var(--white)
        opacity: 1
        transition: .3s ease-in-out
        transition-property: background-color, color
        &:hover
            color: var(--orange)
            background-color: var(--white)
        &_white
            color: var(--orange)
            background-color: var(--white)
            &:hover
                color: var(--white)
                background-color: var(--orange)

</style>