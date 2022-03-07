<template>
  <div>
      <!-- <h1>this is child component</h1> -->
      <!-- <button @click="$emit('someEvent')">click Me</button> -->
      <input type="text" @change="$emit('modifyChange')">
  </div>
</template>

<script>
export default {
    // emits: ['onFocus'],
    data(){
        return {
            message: 'hi there,'
        }
    },
    emits: ['modifyChange'],
    methods: {
        // clickHandler: function(){
        //     console.log('click was triggered')
        //     // this.$emit('someEvent')
        // }
        // sendMessageToParent(){
        //     this.$emit('msg',this.message)
        // }
    }
}
</script>

<style>

</style>