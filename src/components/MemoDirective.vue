<template>
    <div>
        <div v-memo="[count1]">
            <h1>{{count1}}</h1>
            <h1>{{count2}}</h1>
        </div>
        <button @click="count1++">Memo Count</button>
        <button @click="count2++">Count</button>
        <div>
            <h1>{{count1}}</h1>
            <h1>{{count2}}</h1>
        </div>
        <button @click="setter">click ME</button>
        <h1>{{firstName}}</h1>
        <h1>{{lastName}}</h1>
        <div :class="{name}">
            <h1 v-show="ok">Hello this is v-show directive practice</h1>
            <h1 v-if="condition">this is v-if directive for practice</h1>
        </div>
    </div>
</template>
<script>
export default{
    name: 'memoDirective',
    data () {
        return {
            count1: 1,
            count2: 2,
            firstName: 'sandy',
            lastName: 'K',
            name: 'Ram',
            ok: false,
            condition: false
        }
    },
    computed: {
        fullName: {
            get() {
                return this.firstName + ' ' + this.lastName
            },
            set(newValue){
                [this.firstName, this.lastName] = newValue.split(' ')
            }
        }
    },
    methods: {
        setter () {
            this.fullName = 'Sandeep kumar'
        }
    }    
}
</script>