<template lang="pug">
  q-page(padding)
    pre {{activity}}
</template>

<script>
  import { mapGetters, mapActions } from "vuex";
  export default {
    name: "PageActivity",
    computed: {
      ...mapGetters("activity", ["activity"]),
      ...mapGetters(["currentStudent"])
    },
    watch: {
      $route: {
        async handler(val) {
          await this.getActivity();
        },
        immediate: true
      },
      currentStudent: {
        async handler(val) {
          await this.getActivity();
        },
        deep: true
      }
    },
    methods: {
      ...mapActions("activity", ["getActivity"])
    }
  };
</script>

