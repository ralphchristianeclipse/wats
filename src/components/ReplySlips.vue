<template lang="pug">
  .row.gutter-md
      .col-xs-6
        q-card
          q-toolbar(glossy color="default" text-color="faded")
            q-icon(name="attachment" color="grey-6")  
            q-toolbar-title Reply Slips
          q-list(v-if="replySlips && replySlips.length" multiline highlight separator)
            q-item(v-for="(item,index) of replySlips" :key="index")
              q-item-main
                q-item-tile.desc(label) {{item.title}}
                q-item-tile.subject(sublabel) {{item.filename}}
                q-item-tile(sublabel) {{item.date}} 
        //- list-view(:items="replySlips" label="Reply Slips")
        //-   template(slot="label" slot-scope="{ item }").
        //-     {{item.title}}
        //-   template(slot="sublabel-first" slot-scope="{ item }").
        //-     {{item.filename}}
        //-   template(slot="sublabel-last" slot-scope="{ item }").
        //-     {{item.date}}
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
