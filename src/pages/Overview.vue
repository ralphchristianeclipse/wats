<template>

  <q-page padding>
    <q-tabs no-pane-border>
      <q-tab default slot="title" name="overview" label="Overview" icon="dashboard" />
      <q-tab slot="title" name="attendance" label="Attendance" icon="dashboard" />
      <q-tab-pane name="overview">
        <div class="row gutter-md">
          <div class="col-sm-6 col-xs-12">
            <assignments :assignments="assignments" />
            <q-btn @click="previousAssignmentsDate">
              Prev
              <div>
                {{ assignmentsDatePrevious | date("YYYY-MM-DD") }}
              </div>
            </q-btn>
            <q-btn @click="nextAssignmentsDate">
              Next
              <div>
                {{ assignmentsDateNext | date("YYYY-MM-DD") }}
              </div>
            </q-btn>
          </div>
          <div class="col-sm-6 col-xs-12">
            <schedules :schedules="schedules" />
            <q-btn @click="previousAssignmentsDate">
              Prev
              <div>
                {{ assignmentsDatePrevious | date("YYYY-MM-DD") }}
              </div>
            </q-btn>
            <q-btn @click="nextAssignmentsDate">
              Next
              <div>
                {{ assignmentsDateNext | date("YYYY-MM-DD") }}
              </div>
            </q-btn>
          </div>
        </div>
      </q-tab-pane>
      <q-tab-pane name="attendace">
        <div class="row gutter-md">
          <div class="col-sm-6 col-xs-12">

          </div>
        </div>
      </q-tab-pane>
    </q-tabs>

  </q-page>
</template>

<script>
  import { date } from "quasar";
  import { mapActions, mapGetters } from "vuex";
  import Assignments from "src/components/Assignments";
  import Schedules from "src/components/Schedules";
  export default {
    name: "PageOverview",
    components: {
      Assignments,
      Schedules
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

<style>

</style>
