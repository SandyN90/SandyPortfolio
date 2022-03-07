<template>
    <div>
    <label for="">Enter here: </label>
    <input type="text" :value="modelValue" @input="eventValue">
    </div>
</template>
<script>
export default{
    props: {
        modelValue: String,
        modelModifiers: {
            default: ()=>({})
        }
    },
    emits: ['update:modelValue'],
    methods: {
        eventValue(e) {
            console.log(e)
                let value = e.target.value
            if(this.modelModifiers.capitalCase){
                value = value.toUpperCase()
            }
            this.$emit('update:modelValue', value)
        }
    },
    created () {
        console.log(this.modelModifiers)
    }
}
</script>