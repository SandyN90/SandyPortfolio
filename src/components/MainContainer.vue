<template>
  <div>
    <!-- <input type="text" v-model="componentsName" @keyup.enter="inputHandler" placeholder="Enter component Name">
      <button @click="changeComponent">Change Components</button><br><br>
      <h1>This is "{{currentTab}}" Component</h1> -->

    <!-- Creating tabs to toggle the tabs -->
    <!-- <ul>
      <router-link to="/">Home</router-link>
      <router-link :to="{name: 'keepAlive', params:{id: state.id}}">KeepAlive</router-link>
      <router-link to="/memodirective">MemoDirective</router-link>
      <router-link to="/lifecyclehooks">LifeCycleHooks</router-link>
    </ul> -->
    <!-- <button>This is demobtn</button> -->
    <ul>
        <li v-for="item in state" :key="item.id" class="nav">
        <router-link :to="{ name: item.title, params: {id: item.id}}">
            {{item.title}}
        </router-link>
        </li>
    </ul>
    <!-- {{state[0].title}} -->
      <!-- <keep-alive>
    <router-view>
        <component class="components" :is="currentTab"></component>
    </router-view>
      </keep-alive> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      componentsName: "",
      currentTab: "mainComp",
      state: [
          {title: 'homePage', id: 1},
          {title: 'keepAlive', id: 2},
          {title: 'memoDirective', id: 3},
          {title: 'lifecyclehooks', id: 4},
          {title: 'provideInject', id: 5},
          {title: 'routing', id: 6},
          {title: 'lifecyclehooks', id: 7},
          {title: 'eventHandling', id: 8},
          {title: 'v-model', id: 9},
          {title: 'slotProperty', id: 10},
          {title: 'listRendering', id: 11},
          {title: 'practice', id: 12},
          {title: 'attributes', id: 13},
          {title: 'eventPractice', id: 14},
          {title: 'customModifiers', id: 15},
          {title: 'conditionalRendering', id: 16},
          {title: 'navigationHomePage', id: 17}
      ]
    };
  },
//   created(){
//       console.log(this.$route.params.id)
//   },
  methods: {
    changeComponent: function (index) {
      // if(this.componentsName===''){
      //     alert('Enter Component Name')
      // }else{
      //     this.currentTab = this.componentsName
      // }
      let list = document.getElementById("list").children[index].firstChild;
      this.currentTab = list._value;
      // console.log(list._value)
    },
    inputHandler() {
      if (this.componentsName === "") {
        alert("Enter Component Name");
      } else {
        this.currentTab = this.componentsName;
      }
    },
  },
};
</script>

<style scoped>
ul{
    list-style: none;
    display: inline-flex;
}
li{
    margin-left: 10px;
}
#list {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
}
.listItem {
  /* background-color: aqua; */
  width: 200px;
  height: auto;
  color: red;
  margin-bottom: 20px;
}
li {
  cursor: pointer;
}

.router-link-exact-active{
     color:aqua;
}
</style>