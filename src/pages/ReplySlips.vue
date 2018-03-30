<template>
  <q-page padding>
    <reply-slips :reply-slips="replySlips" />
  </q-page>
</template>

<script>
  import { mapGetters, mapActions } from "vuex";
  import ReplySlips from "src/components/ReplySlips";
  export default {
    name: "PageReplySlips",
    components: {
      ReplySlips
    },
    computed: {
      ...mapGetters("grade", ["replySlips"]),
      ...mapGetters(["currentStudent"])
    },
    watch: {
      $route: {
        async handler(val) {
          await this.getGradeReplySlips();
        },
        immediate: true
      },
      currentStudent: {
        async handler(val) {
          await this.getGradeReplySlips();
        },
        deep: true
      }
    },
    methods: {
      ...mapActions("grade", ["getGradeReplySlips"])
    }
  };
</script>

<style>

</style>
