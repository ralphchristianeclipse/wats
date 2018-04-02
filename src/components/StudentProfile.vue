<template lang="pug">
  .row.gutter-md
    .col-sm-3.col-xs-12
      .col-xs-12
        q-list.custom-list(multiline highlight separator)
          q-list-header.custom-header.info.glossy Profile
          q-item
            q-item-main
              q-item-tile(label)
                .text-center.spacer
                  img.avatar(src="")
              q-item-tile.desc.scaper(label) Name:
                span.pull-right {{ currentStudent.firstname }} {{ currentStudent.lastname }}
              q-item-tile.desc(label) Section:
                span.pull-right  {{ currentStudent.grade }}-{{ currentStudent.section }}
              q-item-tile.desc(label) Age:
                span.pull-right  {{ currentStudent.grade }}
              q-item-tile.desc(label) Birthday:
                span.pull-right  {{ currentStudent.birthdate }}
      .col-xs-12
        q-list.custom-list(multiline highlight separator)
          q-list-header.custom-header.glossy.success
          q-item
            q-item-main
              q-item-tile.desc.spacer(label)
                q-icon(name="phone" color="black") 
                span  Contact No.
                span.pull-right 6789889
            
              q-item-tile.desc(label)
                q-icon(name="contact_phone" color="black") 
                span  Preffered Contact:
                span.pull-right Father
              
              q-item-tile.desc(label)
                q-icon(name="home" color="black") 
                span  Address:
                span.pull-right Antipolo
    .col-sm-9.col-xs-12
      q-tabs.custom-tab(color='secondary', glossy='')
        q-tab(default='', slot='title', name='info', label='Info')
        q-tab(slot='title', name='achievements', label='Achievements')
        q-tab(slot='title', name='extracurricular', label='Extracurricular')
        q-tab(slot='title', name='health', label='Health & Medical')
        q-tab(slot='title', name='schedule', label='Class Schedule')
        q-tab(slot='title', name='e-status', label='Enrollment Status')
        q-tab-pane(name='info')
          q-list.custom-list(multiline='', highlight='', separator='')
            q-list-header.custom-header.info.glossy
              q-icon(name='fas fa-female', size='1.5rem')
              |&nbsp; Mother
            q-item
              q-item-main
                q-item-tile.desc(label='')
                  | Name:
                  span.pull-right {{currentStudent.s_momname}} 
                q-item-tile.desc(label='')  Cellphone No.: {{currentStudent.s_momcellno}} 
                q-item-tile.desc(label='')  Office No.: {{currentStudent.s_momofficetel}} 
                q-item-tile.desc(label='')  Office Address: {{currentStudent.s_momofcaddress}} 
                q-item-tile.desc(label='')  Email: {{currentStudent.s_momemail}} 
          q-list.custom-list(multiline='', highlight='', separator='')
            q-list-header.custom-header.info.glossy
              q-icon(name='fas fa-male', size='1.5rem')
              |&nbsp; Father
            q-item
              q-item-main
                q-item-tile.desc(label='')
                  | Name:
                  span.pull-right  {{currentStudent.s_dadname}} 
                q-item-tile.desc(label='') Cellphone No.: {{currentStudent.s_dadcellno}} 
                q-item-tile.desc(label='') Office No.: {{currentStudent.s_dadofficetel}} 
                q-item-tile.desc(label='') Office Address: {{currentStudent.s_dadofcaddress}} 
                q-item-tile.desc(label='') Email: {{currentStudent.s_dademail}} 
          q-list.custom-list(multiline='', highlight='', separator='')
            q-list-header.custom-header.info.glossy
              q-icon(name='fas fa-male', size='1.5rem')
              |&nbsp; Guardian
            q-item
              q-item-main
                q-item-tile.desc(label='')
                  | Name:
                  span.pull-right {{currentStudent.s_guardianname}} 
                q-item-tile.desc(label='') Cellphone No.: {{currentStudent.s_guardiancellno}} 
                q-item-tile.desc(label='') Office No.: {{currentStudent.s_guardianofficetel}} 
                q-item-tile.desc(label='') Office Address: {{currentStudent.s_guardianofcaddress}} 
                q-item-tile.desc(label='') Email: {{currentStudent.s_guardianemail}} 
        q-tab-pane(name='achievements') achievements
        q-tab-pane(name='extracurricular') extra
        q-tab-pane(name='health') health
        q-tab-pane(name='schedule') schedule
        q-tab-pane(name='e-status') status


</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "StudentProfile",
  computed: {
    ...mapGetters(["currentStudent"])
  }
};
</script>
<style lang="stylus" scoped>
.text-center {
  margin: 0 auto;
  text-align: center;
}

.spacer {
  margin-top: 15px;
}

.desc, .desc:hover {
  padding: 10px;
  border-bottom: 1px solid #e0e0e0;
  color: #000000;
  font-size: 14px !important;
}

.avatar {
  margin: 0 auto;
  width: 100px;
  height: 100px;
  border: 2px solid #63bbb2;
  border-radius: 50%;
}
</style>

