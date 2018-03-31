<template lang="pug">
  q-card
    q-toolbar(glossy color="default" text-color="faded")
      q-toolbar-title Activities
    q-list(v-if="activities && activities.length" multiline highlight separator)
      q-item(v-for="(activity,index) of activities", :key="index")
        q-item-main
          q-item-tile(label) {{activity.title}}
          q-item-tile(sublabel) Period: {{activity.period}} 
          q-item-tile(sublabel) Publish Date: {{activity.date}}
        q-item-side(right)
          q-item-tile Status: {{activity.details}}
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
