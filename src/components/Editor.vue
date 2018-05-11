<template>
    <div>
        <p class="field has-addons">
            <a class="button" @click="bold"><span class="icon is-small"><i class="fa fa-bold"></i></span></a>
            <a class="button" @click="italic"><span class="icon is-small"><i class="fa fa-italic"></i></span></a>
            <a class="button" @click="underline"><span class="icon is-small"><i class="fa fa-underline"></i></span></a>
            <a class="button" @click="left"><span class="icon is-small"><i class="fa fa-align-left"></i></span></a>
            <a class="button" @click="center"><span class="icon is-small"><i class="fa fa-align-center"></i></span></a>
            <a class="button" @click="right"><span class="icon is-small"><i class="fa fa-align-right"></i></span></a>
        </p>

        <b-input ref="editor" v-model="text" type="textarea"></b-input>
    </div>
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
    },

    methods: {
        bold() {
            let start = this.$refs.editor.$refs.textarea.selectionStart;
            let end = this.$refs.editor.$refs.textarea.selectionEnd;
            let text = this.text;
            
            this.text = this.text.substring(0, start) + "__" + this.text.substring(start, end) + "__" + text.substring(end, text.length)
        },

        italic() {
        },

        underline() {
        },

        left() {
        },

        center() {
        },

        right() {
        }
    }
};
</script>

<style scoped>
.is-full-height {
    max-height: 100% !important;
    min-height: 100% !important;
}

.textarea {
    height: 100vh !important;
    max-height: 100vh !important;
}
</style>