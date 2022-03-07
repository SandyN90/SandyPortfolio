<template>
    <form class="container input-group">
        <input class="my-3 form-control" type="text" v-model="textValue" required><button class=" btn btn-primary my-3" @click="clickHandler">Add</button>
    </form>
</template>
<script>
export default{
    inject: {
        state: {
            from: 'state'
        },
        editHandler: {
            from: 'editHandler'
        }
    },
    data(){
        return {
            textValue: '',
            isEdit: this.state.edit,
            add: true
        }
    },
    watch: {
        state: {
            handler(){
                if(this.state.edit){
                    console.log('Edit handler',this.state.edit)
                    this.childEditHandler()
                }
            },
            deep:true,
            // flush: 'post'
        }
    },
    methods: {

        // short
        clickHandler(){
            const {edit, editId, items} = this.state
            if(this.textValue !== ''){
                if(edit){
                     items.find((item)=> item.id === editId).value = this.textValue
                     this.state.edit = false
                }else{
                    items.push({id: items.length, value: this.textValue})
                }
                this.textValue = ''
            }
            // else
                // alert('nothing to Add')
        },


        childEditHandler(){
                console.log('child Editor is called')
            this.textValue = this.state.items.find((item)=> item.id === this.state.editId).value
        }
    }
}
</script>