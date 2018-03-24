<template>

  <q-page padding>
    <pre>{{teachers}}</pre>
  </q-page>
</template>

<script>
  import { mapGetters, mapActions } from "vuex";
  export default {
    name: "PageTeachers",
    computed: {
      ...mapGetters("teacher", ["teachers"])
    },
    watch: {
      $route: {
        async handler(val) {
          await this.getTeachers();
        },
        immediate: true
      }
    },
    methods: {
      ...mapActions("teacher", ["getTeachers"])
    }
  };
</script>

<style>

</style>
