<template lang="pug">
  q-page(padding)
    .row.gutter-md
      .col-xs-12 
        q-card
          q-toolbar(glossy color="default")
            q-toolbar-title.text-dark Classmates
          q-list(multiline highlight separator)  
            template(v-for="(student,index) of students")
              q-item.classmate-list(:key="index")
                q-item-side(avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSujhwplE3HCZRYSnNwRJbeF8V9amG9IIPxx7dCVQATbevznXX2IA")
                q-item-main
                  q-item-tile(label) Name: {{student.firstname}} {{student.lastname}}
                  q-item-tile(sublabel) Grade &amp; Section : {{student.grade}} - {{student.section}}
</template>

<script>
  import { mapGetters, mapActions } from "vuex";
  export default {
    name: "PageClassmates",
    computed: {
      ...mapGetters("student", ["students"])
    },
    watch: {
      $route: {
        async handler(val) {
          await this.getStudents();
        },
        immediate: true
      }
    },
    methods: {
      ...mapActions("student", ["getStudents"])
    }
  };
</script>

<style lang="stylus" scoped>
.classmate-list {
  padding: 10px;
}
</style>
