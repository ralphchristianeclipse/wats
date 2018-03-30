<template lang="pug">

  q-page(padding)
   overview-student(v-if="isParentOrStudent")
</template>

<script>
  import { mapActions, mapGetters } from "vuex";

  import OverviewStudent from "src/components/OverviewStudent";
  export default {
    name: "PageOverview",
    components: {
      OverviewStudent
    },
    computed: {
      ...mapGetters(["auth"]),
      isParentOrStudent() {
        return this.auth.type === "p" || this.auth.type === "s";
      }
    }
  };
</script>
