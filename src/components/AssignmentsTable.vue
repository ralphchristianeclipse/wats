<template lang="pug">
  table
    thead
      tr
        th(v-for="(column,index) of columns", :key="index")
    tbody
      tr(v-for="(assignment,index) of assignments", :key="index")
        td 
          div {{ assignment.inputdate | date("dddd") }}
          div {{ assignment.inputdate | date("YYYY-MM-DD") }}
        td
</template>

<script>
  export default {
    props: {
      assignments: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        columns: ["Date", "Assignment", "Class"]
      };
    }
  };
</script>

<style>

</style>
