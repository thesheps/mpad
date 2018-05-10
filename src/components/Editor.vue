<template>
    <b-input class="is-full-height" v-model="text" type="textarea"></b-input>
</template>

<script>
export default {
    data() {
        return {
            text: ""
        }
    },
    
    watch: {
        text() {
            this.$emit("input", this.text);
        }
    }
};
</script>
