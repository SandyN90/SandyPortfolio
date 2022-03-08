<template>
  <div>
      <div>
          <h1>Second Component</h1>
          <button v-on:click="eventBus">Event Change</button>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    methods : {
        eventBus(){
            this.emitter.emit('my-event', {'eventContent': 'string Changed'})
        }
    }
}
</script>

<style>

</style>