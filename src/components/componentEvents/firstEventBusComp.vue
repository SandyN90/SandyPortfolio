<template>
  <div>
      <h1>FirstComponent</h1>
      <p>{{testEvent}}</p>
  </div>
</template>

<script>
export default {
    data(){
        return {
            testEvent: 'String to Change'
        }
    },
    created(){
        this.emitter.on('my-event', (evt)=>{
            this.testEvent = evt.eventContent
        })
    }
}
</script>

<style>

</style>