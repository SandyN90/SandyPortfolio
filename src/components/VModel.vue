<template>
    <div>
        <!-- <label for="">Enter textInput</label><input type="text" v-model.lazy="textInput">
        <h1>{{textInput}}</h1> -->

        <!-- v-model using on component -->

        <slot/>
        <input :value='modelValue' @input="emitValue">
        <!-- <h1>{{value}}</h1> -->
    </div>
</template>
<script>
export default{
    props: {
        modelValue: String,
        modelModifiers: {
        default: () => ({})
        }
    },
    emits: ['update:modelValue'],
    methods: {
        emitValue(e) {
        let value = e.target.value
        if (this.modelModifiers.capitalize) {
            value = value.charAt(0).toUpperCase() + value.slice(1)
        }
        this.$emit('update:modelValue', value)
        }
    },
    // computed: {
    //     value: {
    //         get() {
    //             return this.modelValue
    //         },
    //         set(value) {
    //             this.$emit('update:modelValue', value)
    //         }
    //     }
    // },
    data () {
        return {
            textInput: '',
            answer: 'This is answer'
        }
    }
    // watch: {
    //     textInput() {
    //         console.log('watcher Invoked')
    //         if(this.textInput.indexOf('?')>-1){
    //             console.log('question mark found')
    //         }
    //     }
    // }
}
</script>