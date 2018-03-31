<template lang="pug">
  q-page(padding)
    h1(v-if="loading") Loading
    pdf(:src="pdfSrc")
    pre {{test}}

</template>

<script>
  import { mapGetters, mapActions } from "vuex";
  import Pdf from "vue-pdf";
  export default {
    name: "PageTest",
    components: {
      Pdf
    },
    data() {
      return {
        loader: 0
      };
    },
    computed: {
      ...mapGetters("test", ["test"]),
      loading() {
        return !!this.loader;
      },
      pdfSrc() {
        return this.test
          ? `http://stpcentral.net/assets/pdf/${this.test.filename}`
          : "";
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
