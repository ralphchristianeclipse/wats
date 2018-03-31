<template lang="pug">
  list-view(:items="schedules" label="Schedules")
    template(slot="header-after")
      q-btn(glossy round size="sm" icon="date_range" color="secondary")
        q-popover
          q-datetime-picker(v-model="date" type="date")
    template(slot="label" slot-scope="{ item }") Time: {{item.schedule}}
    template(slot="sublabel-first" slot-scope="{ item }") Subject: {{item.subject}}
</template>

<script>
  import ListView from "src/components/ListView";
  export default {
    name: "ComponentSchedules",
    components: {
      ListView
    },
    props: {
      schedules: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        date: new Date()
      };
    }
  };
</script>

<style lang="stylus" scoped>
  .dtpicker
    margin: 0 10px
</style>

