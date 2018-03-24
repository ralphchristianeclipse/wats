<template>

  <q-page padding>
    <pre>
      {{test}}
    </pre>
  </q-page>
</template>

<script>
  import { mapGetters, mapActions } from "vuex";
  export default {
    name: "PageTest",
    computed: {
      ...mapGetters("test", ["test"])
    },
    watch: {
      $route: {
        async handler(val) {
          await this.getTest();
        },
        immediate: true
      }
    },
    methods: {
      ...mapActions("test", ["getTest"])
    }
  };
</script>

<style>

</style>
