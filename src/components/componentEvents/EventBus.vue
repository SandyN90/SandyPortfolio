<template>
  <div>
      <first-event-bus-comp/>
      <second-event-bus-comp/>
  </div>
</template>

<script>
import FirstEventBusComp from './firstEventBusComp.vue'
import secondEventBusComp from './secondEventBusComp.vue'
export default {
  components: { secondEventBusComp, FirstEventBusComp },

}
</script>

<style>

</style>
FirstEventBusComp