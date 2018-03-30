<template>
  <q-list class="custom-list" multiline highlight separator>
    <q-list-header class="custom-header default glossy">Activities</q-list-header>
    <template v-for="(activity,index) of activities">
      <q-item :key="index" :to="{ name: 'activity', params: { id: activity.id } }">
        <q-item-main>
          <q-item-tile label> {{activity.title}} </q-item-tile>
          <q-item-tile sublabel> Period: {{activity.period}} </q-item-tile>
          <q-item-tile sublabel> Publish Date: {{activity.date}} </q-item-tile>
        </q-item-main>
        <q-item-side right>
          <q-item-tile>Status: {{activity.details}}</q-item-tile>
        </q-item-side>
      </q-item>
    </template>
  </q-list>
</template>

<script>
  export default {
    name: "ComponentActivities",
    props: {
      activities: {
        type: Array,
        default: () => []
      }
    }
  };
</script>

<style>

</style>
