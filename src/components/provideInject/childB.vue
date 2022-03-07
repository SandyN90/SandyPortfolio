<template>
    <div>
        <h1>This is child B</h1>
        <p>{{localMessage}}</p>
        <!-- <h1>{{newLocalMessage}}</h1> -->
        <input type="text" v-model="newState.name">
    </div>
</template>


<script>

export default{
    inject: {
        localMessage: {
            from: 'newMessage',
            
            // default: 'this is default message'
        },
        newState: {
            from: 'newState'
        }
        // newLocalMessage: {
        //     from: 'newData'
        // }
    },
    created(){
        console.log(this.localMessage);
        console.log(this.newState)
    }

}
</script>
