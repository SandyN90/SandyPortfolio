<template>
    <div>
        {{newData}}
    </div>
</template>
<script>
export default{
    data(){
        return {
            newData: 'provide and Injection'
        }
    }
    // inject: {
    //     localMessage: {
    //         from: 'data'
    //     }
    // }
}
</script>