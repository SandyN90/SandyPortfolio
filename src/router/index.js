import { createRouter, createWebHistory } from 'vue-router'
import MainContainer from '../components/MainContainer.vue'
import MainContainerNew from '../components/componentEvents/MainContainerNew.vue'
import HomeView from '../views/HomeView.vue'
import KeepAlive from "../components/componentKeepAlive/keepAlive.vue";
import parentComponent from "../components/componentEvents/parentComponent.vue";
import parentCom from '../components/provideInject/parentCom.vue'
import mainComponent from '../components/teleportFragment/mainComponent.vue'
import AlertBox from "../components/AlertBox.vue";
import CompositionApi from "../components/CompositionApi.vue";
import ConditionalRender from "../components/ConditionalRender.vue";
import CustomModifiers from "../components/CustomModifiers.vue";
import EventPractice from "../components/EventPractice.vue";
import fallThroughAttributes from "../components/fallThroughAttributes.vue";
import HelloWorld from "../components/HelloWorld.vue";
import ListRendering from '../components/ListRendering.vue';
import MemoDirective from "../components/MemoDirective.vue";
import ProvideInjection from "../components/ProvideInjection.vue";
import SlotProperty from "../components/SlotProperty.vue";
import VModel from "../components/VModel.vue";
import EventHandling from "../components/componentEvents/EventHandling.vue";
import LifeCycleHooks from "../components/lifeCycleHooks/LifeCycleHooks.vue";
import RoutingComp from '../components/Routing/RoutingComp.vue'
import NotFound from '../components/Routing/NotFound.vue'
import HomePage from '../components/NavigationGuard/HomePage.vue'
import LoginPage from '../components/NavigationGuard/LoginPage.vue'
import UserPage from '../components/NavigationGuard/UserPage.vue'

// Defining the routes
const routes = [
    {path: '/', name: 'homePage', component: HomeView},
    {path: '/maincontainer', name: 'mainContainer', component: MainContainer},
    {path: '/maincontainer/:id', name: 'main', component: MainContainerNew},
    {path: '/keepalive', name:'keepAlive', component: KeepAlive},
    {path: '/parentcomponent', name:'parentComponent', component: parentComponent},
    {path: '/provideinject', name:'provideInject', component: parentCom},
    {path: '/maincomponent', name:'mainComponent', component: mainComponent},
    {path: '/alertbox', name:'alertBox', component: AlertBox},
    {path: '/compositionapi', name:'compositionApi', component: CompositionApi},
    {path: '/conditionalrendering', name:'conditionalRendering', component: ConditionalRender},
    {path: '/custommodifiers', name:'customModifiers', component: CustomModifiers},
    {path: '/eventpractice', name:'eventPractice', component: EventPractice},
    {path: '/attributes', name:'attributes', component: fallThroughAttributes},
    {path: '/practice', name:'practice', component: HelloWorld},
    {path: '/listrendering', name:'listRendering', component: ListRendering},
    {path: '/memodirective', name:'memoDirective', component: MemoDirective},
    {path: '/slotproperty', name:'slotProperty', component: SlotProperty},
    {path: '/v-model', name:'v-model', component: VModel},
    {path: '/eventhandling', name:'eventHandling', component: EventHandling},
    {path: '/lifecyclehooks', name:'lifecyclehooks', component: LifeCycleHooks},
    {path: '/routing', name:'routing', component: RoutingComp},
    {path: '/provide-inject', name:'provideInject', component: ProvideInjection},
    {path: '/:catchAll(.*)', name:'NotFound', component: NotFound},
    {path: '/home', name: 'navigationHomePage', component: HomePage},
    {path: '/login', name: 'loginPage', component: LoginPage},
    {path: '/user', name: 'userPage', component: UserPage}
]
// Creating router
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })

//   using router guard globally 
router.beforeEach((to,from)=>{
    console.log('before navigation')
    console.log(to,from)
})
  export default router 
  