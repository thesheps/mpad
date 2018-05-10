<template>
  <div id="app" class="columns">
    <div class="column">
      <Editor v-model="text" />
    </div>

    <div class="column">
      <Preview :text="text" />
    </div>    
  </div>
</template>

<script>
import Editor from "./components/Editor.vue";
import Preview from "./components/Preview.vue";

export default {
  name: "App",
  components: { Editor, Preview },
  data() {
    return {
      text: ""
    }
  }
};
</script>
