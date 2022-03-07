<template>
    <div>
        <h1>This is child A</h1>
        <ChildB/>
    </div>
</template>


<script>
import ChildB from "./childB.vue";

export default{
    components: { ChildB }
}
</script>
