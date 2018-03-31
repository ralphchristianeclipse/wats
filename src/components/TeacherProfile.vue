<template lang="pug">
  div
    .row.gutter-md
      .col-sm-3.col-xs-12.gutter-md
        .col-xs-12
          q-card
            q-toolbar(glossy color="info")
              q-toolbar-title Profile
            q-card-main
              .text-center
                img.avatar(:src="auth.image")
                q-card-title {{ currentTeacher.firstname }} {{ currentTeacher.lastname }}
              .row.card-info
                .text-bold Age
                .col.self-end.text-right 55
              .row.card-info
                .text-bold Birthday
                .col.self-end.text-right 55
        
      .col-sm-9.col-xs-12
        q-tabs.custom-tab(color='secondary', glossy='')
          q-tab(default='', slot='title', name='info', label='Info')
          q-tab(slot='title', name='extracurricular', label='Extracurricular')
          q-tab(slot='title', name='medical', label='Medical')
          q-tab-pane(name='info')
            .row.gutter-md
              .col-xs-12
                q-card
                  q-toolbar(glossy color="secondary")
                    q-toolbar-title Teacher
                  q-card-main
                    .row.card-info
                      .text-bold Identification No:
                      .col.self-end.text-right {{currentTeacher.id}}
                    .row.card-info
                      .text-bold Name:
                      .col.self-end.text-right {{fullName}}
                    .row.card-info
                      .text-bold Birthday:
                      .col.self-end.text-right 55
                    .row.card-info
                      .text-bold Mobile Number:
                      .col.self-end.text-right {{currentTeacher.t_cellno}}
                    .row.card-info
                      .text-bold Landline:
                      .col.self-end.text-right {{currentTeacher.t_landline}}
                    .row.card-info
                      .text-bold Address:
                      .col.self-end.text-right {{currentTeacher.t_address}}
                    .row.card-info
                      .text-bold Email:
                      .col.self-end.text-right {{currentTeacher.t_email}}
              .col-xs-12
                q-card
                  q-toolbar(glossy color="secondary")
                    q-toolbar-title Classes
                  q-card-main
                    q-list(no-border multiline)
                      q-item(v-for="(schedule,index) of currentTeacher.classes", :key="index")
                        q-item-main
                          q-item-tile(label) Subject: {{schedule.subj}}
                          q-item-tile(sublabel) Grade: {{schedule.grade}}
                          q-item-tile(sublabel) Section: {{schedule.section}}

          q-tab-pane(name='extracurricular') extracurricular
          q-tab-pane(name='medical') medical
    
</template>

<script>
  import { mapGetters } from "vuex";
  export default {
    name: "TeacherProfile",
    computed: {
      ...mapGetters(["auth", "currentTeacher"]),
      fullName() {
        return this.currentTeacher
          ? `${this.currentTeacher.title} ${this.currentTeacher.firstname} ${
              this.currentTeacher.lastname
            }`
          : "";
      }
    }
  };
</script>
<style lang="stylus" scoped>
  .avatar
    margin: 0 auto
    width: 100px
    height: 100px
    border: 2px solid #63bbb2
    border-radius: 50%

  .card-info
    padding: 10px
    border-bottom: 1px solid #e0e0e0
    color: #000000
    font-size: 14px !important
</style>

