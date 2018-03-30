<template lang="pug">
  list-view(:items="replySlips" label="Reply Slips")
    template(slot="label" slot-scope="{ item }").
      {{item.title}}
    template(slot="sublabel-first" slot-scope="{ item }").
      {{item.filename}}
    template(slot="sublabel-last" slot-scope="{ item }").
      {{item.date}}
</template>

<script>
  import ListView from "src/components/ListView";
  export default {
    name: "ComponentReplySlips",
    components: {
      ListView
    },
    props: {
      replySlips: {
        type: Array,
        default: () => []
      }
    }
  };
</script>

<style>

</style>
