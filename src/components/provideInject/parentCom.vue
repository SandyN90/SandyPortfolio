<template>
    <div>
        <!-- <h1>provide and inject</h1> -->
        <input type="text" v-model="message">
        <h1>{{newState.name}}</h1>
        <ChildA/>
    </div>
</template>
<script>
import ChildA from "./childA.vue";
import {computed} from 'vue'
export default{
    name: "parentCom",
    components: { ChildA },
    data(){
        return {
            message: "hello there, this is provide and injection concept",
            newState: {name: 'sandy'}
        }
    },
    provide() {
        return {
            newMessage: computed(()=> this.message),
            newState: this.newState      
        }
    }
}
</script>