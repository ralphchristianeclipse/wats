<template lang="pug">
  q-page(padding)
   overview-student(v-if="isParentOrStudent")
   overview-teacher(v-else-if="isTeacher")
</template>

<script>
  import { mapActions, mapGetters } from "vuex";

  import OverviewStudent from "src/components/OverviewStudent";
  import OverviewTeacher from "src/components/OverviewTeacher";
  export default {
    name: "PageOverview",
    components: {
      OverviewStudent,
      OverviewTeacher
    },
    computed: {
      ...mapGetters(["auth"]),
      isParentOrStudent() {
        return this.auth.type === "p" || this.auth.type === "s";
      },
      isTeacher() {
        return this.auth.type === "t";
      }
    }
  };
</script>
