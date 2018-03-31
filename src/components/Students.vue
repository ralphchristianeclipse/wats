<template lang="pug">
  list-view(:items="students" label="Students" avatar="")
    template(slot="label" slot-scope="{ item }") {{item.title}}
    template(slot="sublabel-first" slot-scope="{ item }") Period: {{item.period}}
    template(slot="sublabel-last" slot-scope="{ item }") Publish Date: {{item.date}}
</template>

<script>
  import ListView from "src/components/ListView";
  export default {
    name: "ComponentStudents",
    components: {
      ListView
    },
    props: {
      students: {
        type: Array,
        default: () => []
      }
    }
  };
</script>

<style>

</style>
