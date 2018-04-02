<template lang="pug">
  q-card
    q-toolbar(glossy color="secondary" text-color="faded")
      q-icon(name="assignment_late")  
      q-toolbar-title.text-white Assignments
      q-btn(glossy round size="sm" icon="date_range" color="secondary")
        q-popover
          q-datetime-picker(v-model="date" type="date")
    q-list(v-if="assignments && assignments.length" multiline highlight separator)
      q-item(v-for="(assignment,index) of assignments" :key="index")
        q-item-main
          q-item-tile.desc(label) {{assignment.description}}
          q-item-tile.subject(sublabel) Subject: {{assignment.subject}}
          q-item-tile(sublabel) Teacher: {{assignment.tcher_title}} {{assignment.tchr_fname}} {{assignment.tchr_lname}}
</template>

<script>
export default {
  name: "ComponentAssignments",
  props: {
    assignments: {
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
.desc {
  font-size: 14px;
  cursor: pointer;
}

.subject {
  text-transform: capitalize;
}

.dtpicker {
  margin: 0 10px;
}
</style>
