<template lang="pug">
  //- list-view(:items="schedules" label="Schedules")
  //-   template(slot="header-after")
  //-     q-btn(glossy round size="sm" icon="date_range" color="secondary")
  //-       q-popover
  //-         q-datetime-picker(v-model="date" type="date")
  //-   template(slot="label" slot-scope="{ item }") Time: {{item.schedule}}
  //-   template(slot="sublabel-first" slot-scope="{ item }") Subject: {{item.subject}}
  q-card
    q-toolbar(glossy color="secondary" text-color="faded")
      q-icon(name="date_range")  
      q-toolbar-title.text-white Schedules
      q-btn(glossy round size="sm" icon="date_range" color="secondary")
        q-popover
         q-datetime-picker(v-model="date" type="date")
    q-list(v-if="schedules && schedules.length" multiline highlight separator)
      q-item(v-for="(item,index) of schedules" :key="index")
        q-item-main
          q-item-tile.desc(label) Time: {{item.schedule}}
          q-item-tile.subject(sublabel) Subject: {{item.subject}}
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
.dtpicker {
  margin: 0 10px;
}
</style>

