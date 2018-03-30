<template lang="pug">
  q-tabs.custom-tab(color="secondary" glossy)
    q-tab(default slot="title" name="overview" label="Overview")
    q-tab(slot="title" name="attendance" label="Attendance")
    q-tab-pane(name="overview")
      .row.gutter-md
        .col-sm-6.col-xs-12
          assignments(:assignments="assignments")
          q-btn.custom-btn(glossy color="secondary" @click="previousAssignmentsDate")
            div {{ assignmentsDatePrevious | date("dddd") }}
            div {{ assignmentsDatePrevious | date("MMMM DD, YYYY") }}
          q-btn.custom-btn.pull-right(glossy color="secondary" @click="nextAssignmentsDate")
            div {{ assignmentsDateNext | date("dddd") }}
            div {{ assignmentsDateNext | date("MMMM DD, YYYY") }}
        .col-xs-12
          q-list.custom-list.for-calendar(multiline highlight separator)
            q-list-header.custom-header.primary.glossy Calendar
            q-item
              q-item-main
                q-item-tile(label)
                  calendar
</template>

<script>
  import { date } from "quasar";
  import { mapActions, mapGetters } from "vuex";
  import Assignments from "src/components/Assignments";
  import Calendar from "src/components/Calendar";
  import Schedules from "src/components/Schedules";

  export default {
    name: "PageOverview",
    components: {
      Assignments,
      Schedules,
      Calendar
    },
    data() {
      return {
        date: {
          assignments: new Date()
        }
      };
    },
    computed: {
      ...mapGetters("assignment", ["assignments"]),
      ...mapGetters("schedule", ["schedules"]),
      assignmentsDatePrevious() {
        return date.subtractFromDate(this.date.assignments, {
          days: 1
        });
      },
      assignmentsDateNext() {
        return date.addToDate(this.date.assignments, {
          days: 1
        });
      }
    },
    watch: {
      $route: {
        async handler(val) {
          await Promise.all([
            this.getAssignmentsToday(),
            this.getSchedulesToday()
          ]);
        },
        immediate: true
      },
      ["date.assignments"]: {
        async handler(val) {
          await this.getAssignmentsByDate({
            date: val
          });
        }
      }
    },
    methods: {
      ...mapActions("assignment", [
        "getAssignmentsToday",
        "getAssignmentsByDate"
      ]),
      ...mapActions("schedule", ["getSchedulesToday", "getSchedulesByDate"]),
      async previousAssignmentsDate() {
        this.date.assignments = this.assignmentsDatePrevious;
      },
      nextAssignmentsDate() {
        this.date.assignments = this.assignmentsDateNext;
      }
    }
  };
</script>
