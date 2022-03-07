<template>
    <div>
        <Teleport to="#portal-root">
            <h1 v-show="isActive">
                text Content
            </h1>
            <button @click="handleClick">Show</button>
        </Teleport>
        
    </div>
</template>
<script>
export default{
    data(){
        return {
            isActive: false
        }
    },
    methods: {
        handleClick(){
            if(!this.isActive){
                this.isActive = true
            }else{
                this.isActive = false
            }
        }
    }
}
</script>