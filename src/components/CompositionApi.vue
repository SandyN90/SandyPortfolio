<template>
    <div>
        <button @click="count++">Count</button>
        <!-- <h1>{{count}}</h1> -->
        <!-- <h1>{{this.data}}</h1> -->
    </div>
</template>
<script>
import { ref, watchEffect, reactive, toRef } from "vue";

export default{
    props: {
        data: String
    },
    setup(props) {
        // This is example of ref()
        let count = ref(0);
        console.log(props.data)
        // const game = reactive(
        //     {
        //         dice: 0,
        //         roll: 1                
        //     })
        // form here we can pass this data to template passing object name only
        // console.log(context.attrs)
        
        // readonly
        // const original = reactive({ count: 0 })

        // const copy = readonly(original)

        // watchEffect(() => {
        // // works for reactivity tracking
        // console.log(copy.count)
        // })

        // // mutating original will trigger watchers relying on the copy
        // original.count++

        // // mutating the copy will fail and result in a warning
        // copy.count++ // warning!

        const state = reactive({
            foo: 1,
            val: 2
        })
        const fooRef = toRef(state, 'foo')
        fooRef.value++
        console.log(state.foo)
        state.foo++
        console.log(fooRef.value)
        watchEffect(() => console.log('foo: ' + state.foo))
        // watchEffect()

        // watchEffect(() => console.log(count.value))
        return {
            count
        }

        // toRef()

    },
    name: 'compositionApi',
    data () {
        return {
            // count: 1
        }
    },
    mounted () {
        console.log(this.count)
    }    
}
</script>