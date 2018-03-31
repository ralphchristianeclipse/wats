<template lang="pug">
  q-page(padding)
    h1(v-if="loading") Loading
    pre(v-else)
      | {{test}}
</template>

<script>
  import { mapGetters, mapActions } from "vuex";
  export default {
    name: "PageTest",
    data() {
      return {
        loader: 0
      };
    },
    computed: {
      ...mapGetters("test", ["test"]),
      loading() {
        return !!this.loader;
      }
    },
    watch: {
      $route: {
        async handler(val) {
          this.loader++;
          await this.getTest();
          this.loader--;
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
