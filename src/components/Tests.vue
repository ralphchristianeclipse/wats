<template lang="pug">
  //- list-view(:items="tests" label="Tests" @select="onSelectTest", :loading="loading")
  //-   template(slot="label" slot-scope="{ item }") {{item.title}}
  //-   template(slot="sublabel-first" slot-scope="{ item }") Period: {{item.period}}
  //-   template(slot="sublabel-last" slot-scope="{ item }") Publish Date: {{item.date}}
  q-card
    q-toolbar(glossy color="secondary" text-color="faded")
      q-icon(name="border_color")  
      q-toolbar-title.text-white Tests
    q-list(v-if="tests && tests.length" multiline highlight separator)
      q-item(v-for="(item,index) of tests" :key="index")
        q-item-main
          q-item-tile.desc(label) {{item.title}}
          q-item-tile.subject(sublabel)  Period: {{item.period}}
          q-item-tile(sublabel) Publish Date: {{item.date}} 
 
</template>

<script>
import ListView from "src/components/ListView";
export default {
  name: "ComponentTests",
  components: {
    ListView
  },
  props: {
    tests: {
      type: Array,
      default: () => []
    },
    loading: {
      type: Boolean
    }
  },
  methods: {
    onSelectTest(test) {
      this.$router.push({ name: "test", params: { id: test.id } });
    }
  }
};
</script>

<style>

</style>
