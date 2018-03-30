<template>

  <q-page padding>
    <div class="row gutter-md">
      <div class="col-xs-12">
        <q-list class="custom-list" multiline highlight separator>
          <q-list-header class="custom-header default glossy">Classmates</q-list-header>
          <template v-for="(student,index) of students">
            <q-item :key="index" class="classmate-list">
              <q-item-side avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSujhwplE3HCZRYSnNwRJbeF8V9amG9IIPxx7dCVQATbevznXX2IA" />
              <q-item-main>
                <q-item-tile label> Name: {{student.firstname}} {{student.lastname}} </q-item-tile>
                <q-item-tile sublabel> Grade &amp; Section : {{student.grade}} - {{student.section}} </q-item-tile>
              </q-item-main>
            </q-item>
          </template>
        </q-list>
      </div>
    </div>

  </q-page>
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
  .classmate-list
    padding: 10px
</style>
