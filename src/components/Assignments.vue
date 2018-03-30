<template lang="pug">
  q-list.custom-list(multiline highlight separator)
    q-list-header.custom-header.default.glossy
      q-icon(name="edit" color="grey-6")
      | Assignments
      .pull-right.dtpicker
        q-btn(glossy round size="sm" icon="date_range" color="secondary")
        q-popover
          q-datetime-picker(v-model="date" type="date")
    q-item(v-for="(assignment,index) of assignments" :key="index")
      q-item-main
        q-item-tile.desc(label) {{assignment.description}}
        q-item-tile.subject(sublabel) Subject: {{assignment.subject}}
        q-item-tile(sublabel) Teacher: {{assignment.tcher_title}} {{assignment.tchr_fname}} {{assignment.tchr_lname}}
        q-item-tile(sublabel) Teacher Date: {{assignment.pubdate}}

</template>

<script>
  import ListView from "src/components/ListView";
  export default {
    name: "ComponentAssignments",
    components: {
      ListView
    },
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
  .desc
    font-size: 14px
    cursor: pointer

  .subject
    text-transform: capitalize

  .dtpicker
    margin: 0 10px
</style>
