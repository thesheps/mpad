<template>
    <div v-html="renderedHtml" />
</template>

<script>
import showdown from 'showdown/dist/showdown.min.js'

export default {
  props: ["text"],

  data() {
    return {
      renderedHtml: ""
    };
  },

  watch: {
    text() {
        let converter = new showdown.Converter();
        this.renderedHtml = converter.makeHtml(this.text);
    }
  }
};
</script>
