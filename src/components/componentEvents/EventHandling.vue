<template>
  <div>

      <button @click="clickHandler">click</button>
      <event-bus/>
  </div>
</template>

<script>
// import { isMemberExpressionBrowser } from "@vue/compiler-core";

import EventBus from "./EventBus.vue"

export default {
    components: {EventBus},
    data(){
        return {

        }
    },
    methods: {
        clickHandler: function(){
            console.log('click is called')
        }
    }
    
}
</script>

<style scoped>
.mainContainer{
    border: 2px solid black;
    width: 500px;
    height: 400px;
    align-content: center;
    align-items: center;
}
.div1{
    border: 1px solid red;
    width: 400px;
    height: 300px;
}
.div2{
    border: 1px solid green;
    width: 300px;
    height: 200px;
}
</style>