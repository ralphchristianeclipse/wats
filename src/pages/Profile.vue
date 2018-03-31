<template lang="pug">
  q-page(padding)
    student-profile(v-if="isParentOrStudent")
    teacher-profile(v-else-if="isTeacher")
</template>

<script>
  import { mapGetters } from "vuex";
  import StudentProfile from "src/components/StudentProfile";
  import TeacherProfile from "src/components/TeacherProfile";
  export default {
    name: "Profile",
    components: {
      StudentProfile,
      TeacherProfile
    },
    computed: {
      ...mapGetters(["auth"]),
      isParentOrStudent() {
        return this.auth.type === "s" || this.auth.type === "p";
      },
      isTeacher() {
        return this.auth.type === "t";
      }
    }
  };
</script>
<style lang="stylus" scoped>
  .text-center
    margin: 0 auto
    text-align: center

  .spacer
    margin-top: 15px

  .desc, .desc:hover
    padding: 10px
    border-bottom: 1px solid #e0e0e0
    color: #000000
    font-size: 14px !important

  .avatar
    margin: 0 auto
    width: 100px
    height: 100px
    border: 2px solid #63bbb2
    border-radius: 50%
</style>

