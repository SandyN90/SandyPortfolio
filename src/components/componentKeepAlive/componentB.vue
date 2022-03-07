<template>
    <div>
        <h1>hi, this component B</h1>
        <input type="text" v-model="inputText">
    </div>
</template>
<script>
export default{
    data(){
        return {
            inputText: 'hello'
        }
    }
}
</script>