<template>
    <div>
        <!-- <button>
            <slot>
                click 
            </slot>
        </button> -->
        <!-- <header>
            <slot  name="header">
                header
            </slot>
        </header>
        <main>
            <slot  name="main">
                main
            </slot>
        </main>
        <demo>
            <slot  name="demo">
                ksdhflsjfhd
            </slot>
        </demo>
-->
        <!-- <div> 
            <slot :text="greetingMessage">

            </slot>
        </div> -->
        {{greetingMessage}}
        <!-- <button @click="fancyButton"><slot/></button> -->
        <ProvideInjection/>
    </div>
</template>
<script>
import ProvideInjection from "./ProvideInjection.vue"
  
// function fancyButton(slotContent){
//             console.log('fancyButton is clicked')
//             return (`<button>${slotContent}</button>`)

//         }
//         fancyButton('click Me') 
export default{
    data() {
        return {
            greetingMessage: 'SlotProperty'
        }
    },
    methods: {},
    components: {
        ProvideInjection
    },
    inject: {
        message: {
            form: ''
        }
    }
    
}
</script>