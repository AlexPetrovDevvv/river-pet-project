<template >
    <main-template class="main-form">
        <template #content>
            <div class="container">
                <form method="POST" class="form">
                    <div class="form-row">
                        <div class="field-box">
                            <span class="field__title">pH 1 квартал</span>
                            <input v-model="fields.phOne" type="number" class="field" name="field" placeholder="7,41">
                        </div>
                        <div class="field-box">
                            <span class="field__title">O2 1 квартал</span>
                            <input v-model="fields.oOne" type="number" class="field" name="field" placeholder="7,41">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="field-box">
                            <span class="field__title">pH 2 квартал</span>
                            <input v-model="fields.phTwo" type="number" class="field" name="field" placeholder="7,41">
                        </div>
                        <div class="field-box">
                            <span class="field__title">O2 2 квартал</span>
                            <input v-model="fields.oTwo" type="number" class="field" name="field" placeholder="7,41">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="field-box">
                            <span class="field__title">pH 3 квартал</span>
                            <input v-model="fields.phThree" type="number" class="field" name="field" placeholder="7,41">
                        </div>
                        <div class="field-box">
                            <span class="field__title">O2 3 квартал</span>
                            <input v-model="fields.oThree" type="number" class="field" name="field" placeholder="7,41">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="field-box">
                            <span class="field__title">pH 4 квартал</span>
                            <input v-model="fields.phFour" type="number" class="field" name="field" placeholder="7,41">
                        </div>
                        <div class="field-box">
                            <span class="field__title">O2 4 квартал</span>
                            <input v-model="fields.oFour" type="number" class="field" name="field" placeholder="7,41">
                        </div>
                    </div>
                </form>
                <div class="wrapper">
                    <span class="result">{{ ITS }}</span>
                    <button-component tag="button" text="Произвести расчет" @click.prevent="calculate"/>
                </div>
            </div>
        </template>
    </main-template>
</template>
<script setup>
    import MainTemplate from '../../../components/shared/Main/Index.vue'
    import ButtonComponent from '../../../components/shared/Button/Index.vue'
    import { ref } from 'vue'

    const fields =  ref({
        phOne: 0,
        phTwo: 0,
        phThree: 0,
        phFour: 0,
        oFour: 0,
        oOne: 0,
        oTwo: 0,
        oThree: 0,
        oFour: 0,
    })

    const ITS = ref(0)

    function calculate() {
        let aTopMeaning = (fields.value.phOne * fields.value.oOne) + (fields.value.phTwo * fields.value.oTwo) + (fields.value.phThree * fields.value.oThree) + (fields.value.phFour * fields.value.oFour)

        console.log(aTopMeaning)

        let aTop = aTopMeaning - (aTopMeaning / 4)

        console.log(aTop)

        let aBottomMeaning = (fields.value.oOne * fields.value.oOne) + (fields.value.oTwo * fields.value.oTwo) + (fields.value.oThree * fields.value.oThree) + (fields.value.oFour * fields.value.oFour)

        console.log(aBottomMeaning)

        let aBottom = aBottomMeaning - (aBottomMeaning / 4)

        console.log(aBottom)

        let a = aTop / aBottom

        console.log(a)

        let ITSOne = (fields.value.phOne + fields.value.phTwo + fields.value.phThree + fields.value.phFour) / 4

        console.log(ITSOne)

        let ITSTwo = a * (100 - ((fields.value.oOne + fields.value.oTwo + fields.value.oThree + fields.value.oFour) / 4))

        console.log(ITSTwo)

        ITS.value = (ITSOne + ITSTwo).toFixed(2)
    }
</script>
<style lang="sass">
    .main-form
        .container
            display: flex
            align-items: flex-end
            gap: 100px
            padding: 200px 0
            justify-content: center
    .form
        display: grid
        gap: 30px
        &-row
            display: flex
            align-items: center
            gap: 30px
    .field
        width: 100%
        height: 40px
        padding: 10px 5px
        color: var(--black)
        font-size: 16px
        border: 1px solid var(--orange)
        border-radius: 6px
        margin-top: 30px
        &__title
            display: block
            font-size: 20px
            color: var(--black)
        &-box
            width: 200px
    .result
        display: block
        margin-bottom: 30px
        color: var(--orange)
        font-weight: 600
        font-size: 30px
</style>