<template lang="pug">
  q-page(padding)
    h5.text-center(v-if="$route.params.id") {{$route.params.id.replace('_', ' ').toUpperCase()}}
    .row.gutter-sm.q-pa-sm
      .col-sm-6.col-xs-12
        assignments(:assignments="assignments")
      .col-sm-6.col-xs-12
        tests(:tests="tests", :loading="loading")
      .col-sm-6.col-xs-12
        activities(:activities="activities")
      .col-sm-6.col-xs-12
        activities(:activities="activities")
</template>

<script>
  import { mapGetters, mapActions } from "vuex";
  import Assignments from "src/components/Assignments";
  import Tests from "src/components/Tests";
  import Activities from "src/components/Activities";
  export default {
    name: "PageSubject",
    components: {
      Assignments,
      Tests,
      Activities
    },
    computed: {
      ...mapGetters("subject", [
        "assignments",
        "tests",
        "activities",
        "handouts",
        "loading"
      ]),
      ...mapGetters(["currentStudent"])
    },
    watch: {
      $route: {
        async handler(val) {
          await this.getAllStudentData();
        },
        immediate: true
      },
      currentStudent: {
        async handler(val) {
          await this.getAllStudentData();
        },
        deep: true
      }
    },
    methods: {
      ...mapActions("subject", [
        "getSubjectAssignments",
        "getSubjectTests",
        "getSubjectActivities",
        "getSubjectHandouts"
      ]),
      async getAllStudentData() {
        this.loading = true;
        await Promise.all([
          this.getSubjectAssignments(),
          this.getSubjectTests(),
          this.getSubjectActivities(),
          this.getSubjectHandouts()
        ]);
        this.loading = false;
      }
    }
  };
</script>

<style>

</style>
