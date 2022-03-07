<template >
  <div>
      <h1>lifeCycle hooks</h1>
      <h1 >{{count}}</h1>
    <button @click="count+=1">countIncrease</button>
    <button @click="clickHandler">unmount</button>
    <div v-if="isActive"> 
vggrt
    </div>
    <ChildComponent />

  </div>
</template>

<script>
import ChildComponent from "./ChildComponent.vue";


export default {
    data() {
        return {
            count: 0,
            isActive: true
        };
    },
    mounted() {
        console.log("Elements are mounted");
    },
    created() {
        console.log("Elements are created");
    },
    beforeCreate() {
        console.log("before created is called");
    },
    beforeMount() {
        console.log("Before Mount is called");
    },
    beforeUpdate() {
        console.log("before update is called");
    },
    unmounted() {
        console.log("unMount is called--------------------");
    },
    updated() {
        console.log("update is called");
    },
    methods: {
        clickHandler() {
                this.isActive =!this.isActive
            
        }
    },
    components: { ChildComponent }
}
</script>

<style>

</style>