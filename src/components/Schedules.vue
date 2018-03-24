<template>
  <q-list multiline highlight separator>
    <q-list-header>Schedules</q-list-header>
    <template v-for="(schedule,index) of schedules">
      <q-item :key="index">
        <q-item-main>
          <q-item-tile label> {{schedule.description}} </q-item-tile>
          <q-item-tile sublabel> Teacher: {{schedule.tcher_title}} {{schedule.tchr_fname}} {{schedule.tchr_lname}} </q-item-tile>
          <q-item-tile sublabel> Publish Date: {{schedule.pubdate}} </q-item-tile>
        </q-item-main>
      </q-item>
    </template>
  </q-list>
</template>

<script>
  export default {
    name: "ComponentSchedules",
    props: {
      schedules: {
        type: Array,
        default: () => []
      }
    }
  };
</script>

<style>

</style>
