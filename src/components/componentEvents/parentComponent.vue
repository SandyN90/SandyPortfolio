<template>
    <div>
        <!-- <h1 >this is parent component</h1> -->
        <h1>{{msg}}</h1>
        <!-- <button >child button</button> -->
        <MyComponent @modify-Change="receiveMsg"/>
        <EventHandling/>

    </div>
</template>
<script>
import MyComponent from "./MyComponent.vue";
import EventHandling from "./EventHandling.vue";
export default{
    components: { MyComponent, EventHandling },
    data(){
        return {
            msg: 'msg'
        }
    },
    methods: {
        receiveMsg(){
            
            console.log('Hello this event handling from child component')
        }
    }
    
}
</script>