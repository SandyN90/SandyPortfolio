<template>
    <div class="demo" :class="{newClass: isActive, 'text-danger': toCheck}" :style="{'background-color': bgColor, width: isDigit(width), height: isDigit(heightValue)}">
        <!-- <h1>{{name}}</h1> -->
        <h1>{{fName}}</h1>
        <p>{{lName}}</p>
        <h2>{{this.fullName = 'hello hi'}}</h2>
        <p>Computed Random Number: {{RandomNumber}}</p>
        <p>Computed Random Number: {{RandomNumber}}</p>
        <p>Computed Random Number: {{RandomNumber}}</p>
        <p>Method Random Number: {{random()}}</p>
        <p>Method Random Number: {{random()}}</p>
        <p>Method Random Number: {{random()}}</p>
        <div :class="objectClass"></div>
    </div>
</template>
<script>
export default{
    name: 'conditionalRender',
    data () {
        return {
            name : 'Hello, This is pratice tutorial',
            isActive: true,
            toCheck: true,
            bgColor: 'blue',
            width: 100,
            heightValue: 50,
            fullName: 'Sandeep',
            fName: 'Rahul',
            lName: 'Ramesh'
        }
    },
    methods: {
        isDigit: function (number) {
            return Number.isInteger(number)?number + 'vh': number
        },
        random: function () {
            return Math.random()
        }
    },
    computed: {
        getFullName: {
            get: function (){
                return this.fName + ' ' + this.lName
            },
            set: function (fullName) {
                return [this.fName, this.lName] = fullName.split('o')
            }
        },
        RandomNumber: function () {
            return Math.random()
        },
        objectClass: function () {
            return {
                defaultClass: this.isActive,
                newClass: this.toCheck
            }
        }
    }
}
</script>
