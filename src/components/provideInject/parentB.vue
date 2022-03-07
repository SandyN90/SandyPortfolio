<template>
    <div>
        <h1>this is parent B</h1>
        <ChildB/>
    </div>
</template>
<script>
import ChildB from "./childB.vue";
export default{
    data() {
        return {
            newData: "hello this is data from parent B"
        };
    },
    provide() {
        return {
            newData: this.newData
        };
    },
    components: { ChildB }
}
</script>