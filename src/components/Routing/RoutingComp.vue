<template>
  <div>
      <h1>this is root component</h1>
      <ul>
        <li><a href="#/header">Header</a></li>
        <li><a href="#/main">MainComponent</a></li>
        <li><a href="#/footer">Footer</a></li>
      </ul>
      <!-- <HeaderComp/>
      <MainComp/>
      <FooterComp/> -->
      <component :is="currentView"/>
  </div>
</template>

<script>
import HeaderComp from "./HeaderComp.vue";
import FooterComp from "./FooterComp.vue";
import MainComp from "./MainComp.vue";


// This is exmple for routing
const routes = {
  '/header': HeaderComp,
  '/footer': FooterComp,
  '/main': MainComp
  }
export default {
    components: { HeaderComp, FooterComp, MainComp },
    data(){
      return {
        currentPath: window.location.hash
      }
    },
    computed: {
    currentView() {
      console.log(this.currentPath)
      return routes[this.currentPath.slice(1)||'/'] || HeaderComp
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
		this.currentPath = window.location.hash
		})
  }
}
</script>

<style>

</style>