<template>
    <div>
        <input type="text" v-model="inputText">
        <button @click="addData">Add</button>
        <ul>
            <li v-for="a in items" :key="a.id">{{a.value}}</li>
        </ul>
        <!-- <CompositionApi :data="newProperty"/> -->
        <!-- <input type="checkbox" v-model="checked">
        <input type="radio" value="one" v-model="picked">
        <label for="one">one</label>
        <input type="radio" value="two" v-model="picked">
        <label for="two">two</label>
        <input type="radio" value="three" v-model="picked">
        <label for="three">Three</label>
        <input type="radio" value="four" v-model="picked">
        <label for="four">Four</label>
        <h1>This checkbox is {{checked}}</h1>
        <h1>Rodio button is {{picked}}</h1> -->

        <!-- This is using v-model binding of forms -->
        <!-- <select v-model="selected" multiple>
            <option disabled value="">Please select one</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
        </select>
        <h1>The selected value is: {{selected}}</h1> -->

        <!-- This is redering of select option using v-for rendering of data -->
        <!-- <select v-model="selected">
            <option v-for="a in items" :key="a.id">{{a.value}}</option>
        </select>
        <h1>{{selected}}</h1> -->
        <!-- modifires -->
        <!-- .lazy Modifire -->
        <!-- <input type="number" v-model.number="msg">
        <h1>{{msg}}</h1> -->
        <!-- <ul>
            <li v-for="item in list" :key="item" ref="items">
            {{ item }}
            </li>
        </ul> -->

        <!-- alert box -->
        <!-- <AlertBox>
            <strong>Error!</strong>
            something bad happened
        </AlertBox> -->
    </div>
</template>
<script>
// import AlertBox from "./AlertBox.vue"
// import CompositionApi from "./CompositionApi.vue"
export default{
    name: 'listRendering',
    data () {
        return{
            newData: 'nothing',
            newProperty: 'newData',
            // items: [{value: '', id: 0}],
            inputText: 'Enter some thing',
            a: '',
            // checked: true,
            // picked: 'one'
            selected: '',
            items: [
                {value: 'A', id: '0'},
                {value: 'B', id: '1'},
                {value: 'C', id: '2'},
                {value: 'D', id: '3'}
            ],
            msg: '',
            list: [1, 2, 3]
        }
    },
    components: {
    // AlertBox
},
    methods: {
        addData: function () {
            this.items.push({value: this.inputText, id: this.items.length})
            this.inputText = ''
        }
    },
    mounted() {
    // console.log(this.$refs.items)
  }
}
</script>