<template lang="pug">
  q-input(v-if="edit" :type="type" :value="value" @input="onInput")
  .caption(v-else) {{value}}
</template>

<script>
  export default {
    props: {
      value: {
        type: String
      },
      edit: {
        type: Boolean
      },
      type: {
        type: String,
        default: "text"
      }
    },
    methods: {
      onInput(event) {
        console.log(event);
        this.$emit("input", event);
      }
    }
  };
</script>

<style>

</style>
