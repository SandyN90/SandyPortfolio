<template>
    <div id="root">
        <!-- <h1>keepAlive</h1> -->
        <KeepAlive>
            <component :is="isActive"></component>
        </KeepAlive>
        <button @click="clickHandle" id="btn">Click Me</button>
    </div>
</template>
<script>
import componentA from './componentA.vue'
import componentB from './componentB.vue'
import componentC from './componentC.vue'
export default{
  components: { componentA, componentB, componentC },   
  data(){
      return {
          isActive: 'componentA',
          count: 0
      }
  },
  methods: {
      clickHandle(){
          this.count+=1
          if(this.count===1){
              this.isActive='componentB'
          }else if(this.count===2){
              this.isActive = 'componentC'
          }else{
              this.count=0
              this.isActive= 'componentA'
          }
      }
  },
  
}
</script>
<style scoped>
#root{
    display: flex;
}
.component{
    border: 1px solid black;
    background-color: gray;
    color: white;
    margin-right: 20px;

}
#A{
    margin-left: 20px;
}
#btn{
    width: 100px;
    height: 40px;
}
</style>