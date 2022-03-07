<template>
  <div class="container">
      <ChildA/>
      <ul class="list-group">
          <li class="list-group-item d-flex" v-for="item in state.items" :key="item.id">
              <span class="">{{item.value}}</span>
              <button class="ms-auto btn btn-secondary" @click="editHandler(item.id)">Edit</button>
              <button class="btn btn-secondary mx-2" @click="deleteHandler(item.id)">Delete</button>
          </li>
      </ul>
  </div>
</template>
<script>
import ChildA from "./childA.vue"
export default{
    data() {
        return {
            state: {
                items: [{id: 0, value: 'item 1  '}],
                isEdit: false,
                isDelete: false,
                editId:null
            }
        };
    },
    provide(){
        return {
            state: this.state,
            editHandler: this.editHandler,
        }
    },
    methods:{
        editHandler: function(id){
            this.state.edit = true
            this.state.editId =id
        },
        deleteHandler: function(index){
            this.state.items = this.state.items.filter((elems)=>elems.id!== index)
            
            console.log('delete was triggered',this.state.items[index],index)
        }
    },
    components: { ChildA }
}
</script>
<style scoped>
.list-group{
    list-style: none;   
}
</style>