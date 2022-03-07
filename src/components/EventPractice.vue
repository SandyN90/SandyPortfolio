<template>
    <div>
        <h1>Hello this is Event Practice set</h1>
        <button @click="$emit('newFunction', 2)">Click Me</button>
        <input type="text" v-model="textValue" @input="inputMethod">
        <h1>{{textValue}}</h1>
        <button @click="$emit('click')">Native Click</button>
    </div>
</template>
<script>
export default{
    emits: ['focusInput','click'],
    data (){
        return {
            textValue: ''
        }
    },
    methods: {
        inputMethod(){
            this.$emit('focusInput')
        },
        clickCheck(){
            // this.$emit('clickParent')
            console.log('this is native click')
            
        }
    }
}
</script>