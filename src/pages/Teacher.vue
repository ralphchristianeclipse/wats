<template lang="pug">
  q-page(padding)
    pre {{teacher}}
</template>

<script>
  import { mapGetters, mapActions } from "vuex";
  export default {
    name: "PageTeacher",
    computed: {
      ...mapGetters("teacher", ["teacher"])
    },
    watch: {
      $route: {
        async handler(val) {
          await this.getTeacher();
        },
        immediate: true
      }
    },
    methods: {
      ...mapActions("teacher", ["getTeacher"])
    }
  };
</script>

<style>

</style>
