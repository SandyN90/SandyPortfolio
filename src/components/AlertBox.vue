<template>
    <div>
        <!-- <slot/> -->
    <!-- <CustomModifiers v-model.capitalCase="message"/> -->
        <!-- <VModel v-model.capitalize="message"/> -->
        <!-- <EventPractice @focusInput="focusMethod" @click="parentClick"/> -->
            <!-- {{message}} -->
            <!-- <fallThroughAttributes class="demoClass"/> -->
            <!-- <SlotProperty/> -->
            <!-- <SlotProperty>
                <template #[header]>

                </template>
                <template  #main>
                   
                </template>

            </SlotProperty>
            <slot-property v-slot="slotProps">{{slotProps.text}}</slot-property> -->
    </div>
</template>
<script>
// import VModel from "./VModel.vue"
// import CustomModifiers from '@/components/CustomModifiers.vue'
// import EventPractice from "./EventPractice.vue"
// import fallThroughAttributes from "./fallThroughAttributes.vue"
// import SlotProperty from "./SlotProperty.vue"

export default{
    props: ['modelValue'],
    name: 'AlertBox',
    data () {
        return {
            message: 'Alert Box',
            count: 1,
            header: 'demo'
        }
    },
    // provide: {
    //     message: this.message
    // },
    methods: {
        focusMethod () {
            console.log('Focus method is called')
        },
        parentClick(){
            console.log('parentClick')
        },
        // consoleValue(n){
        //     console.log("NewFunction",n)
        //     console.log(n*10)
        //     this.message = 'Hello this is newFunction'
        // }
        showData(n){
            console.log(n)
        }
    },
    components: {
        // VModel
        // CustomModifiers
        // EventPractice,
        // fallThroughAttributes
        // SlotProperty
    }
}
</script>