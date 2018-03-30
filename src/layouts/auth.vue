<template lang="pug">
  q-layout(view="hHh Lpr fFr" @resize="setWindowSize" @scroll="setWindowScroll")
    q-layout-header
      q-toolbar(glossy)
        q-btn(glossy round dense icon="menu" @click="showDrawer")
        q-toolbar-title
          a.al-logo.clearfix
            span STP 
            | Central
        q-btn.q-mr-xs(v-if="auth.type === 'p'" round icon="people")
          q-chip.custom-chip(floating color="secondary") {{auth.children.length}}
          q-popover
            q-list(separator link)
              q-item(v-for="(child,index) of auth.children" :key="index" @click.native="getParentChild(child.id)", v-close-overlay="true")
                q-item-main
                  q-item-tile(label) {{ child.firstname }} {{ child.lastname }}
                  
        img.avatar(:src="auth.image" alt="")
        q-btn(glossy round icon="exit_to_app" @click="logout")
    
    q-layout-drawer(side="left" v-model="drawer.left" :content-class="leftDrawerClasses" @click="showDrawer")
      q-list.non-selectable(no-border link inset-delimiter)
        template(v-for="(link,key,index) of links")
          q-item(v-if="!link.children" :key="`${link.name}-${index}`" :to="link.to" dark link)
            q-item-side(v-if="link.icon" :icon="link.icon")
            q-item-main(:label="link.label")
          q-collapsible(v-else :key="`${link.name}-${index}`" :content-class="'side-collapsible'" indent icon="explore" :label="link.label" :value="!drawer.mini")
            q-item.sub-item(v-for="(link,index) of link.children" :key="`${link.name}-${index}`" :to="link.to" dark link)
              q-item-side(v-if="link.icon" :icon="link.icon")
              q-item-main(:label="link.label | capitalizeFirst")

    q-page-container
      q-toolbar.invert-bg.student-info(inverted)
        q-toolbar-title(v-if="currentStudent") Hello, {{greeting}}
          q-btn.btn-info(glossy color="secondary" size="md" @click="$router.push({name: 'profile'})") {{userType}} Profile
        q-btn.btn-info(glossy color="warning" size="md") 55 Days Present
        q-btn.btn-info(glossy color="info" size="md") 5 Days Absent
        q-btn.btn-info(glossy color="tertiary" size="md") 3 Days Late
      transition(appear mode="out-in" enter-active-class="animated zoomIn" leave-active-class="animated zoomOut")
        router-view(:key="$route.fullPath")
</template>

<script>
  import { openURL } from "quasar";
  import { mapGetters, mapActions } from "vuex";
  export default {
    // name: 'LayoutName',
    data() {
      return {
        drawer: {
          left: true,
          mini: false
        },
        links: {
          overview: {
            label: "Overview",
            to: {
              name: "overview"
            },
            icon: "dashboard"
          },
          profile: {
            label: "Profile",
            to: {
              name: "profile"
            },
            icon: "face"
          },
          replySlips: {
            label: "Reply Slips",
            to: {
              name: "reply-slips"
            },
            icon: "feedback"
          },
          subjects: {
            label: "Subjects",
            icon: "book",
            children: []
          },
          directory: {
            label: "Directory",
            icon: "book",
            children: [
              {
                label: "Classmates",
                to: {
                  name: "classmates"
                }
              },
              {
                label: "Teachers",
                to: {
                  name: "teachers"
                }
              },
              {
                label: "Staff",
                to: {
                  name: "staff"
                }
              }
            ]
          }
        }
      };
    },
    computed: {
      ...mapGetters(["auth", "currentStudent", "isMobile"]),
      leftDrawerClasses() {
        return [this.isMini ? "q-drawer-mini" : "", "bg-primary text-white"];
      },
      isMini() {
        return this.drawer.mini && !this.isMobile;
      },
      greeting() {
        return this.currentStudent
          ? `${this.currentStudent.firstname} ${this.currentStudent.lastname} ${
              this.currentStudent.grade
            }-${this.currentStudent.section}`
          : this.currentTeacher
            ? `${this.currentTeacher.title} ${this.currentTeacher.firstname} ${
                this.currentTeacher.lastname
              }`
            : "";
      },
      userType() {
        const types = {
          s: "Student",
          p: "Student",
          t: "Teacher"
        };
        return this.auth ? types[this.auth.type] : "";
      }
    },
    watch: {
      isMobile: {
        handler(val) {
          this.drawer.left = !val;
        },
        immediate: true
      }
    },
    methods: {
      openURL,
      ...mapActions(["logout", "getParentChild"]),
      goToProfile() {
        this.$router.push({ name: "studentProfile" });
      },
      setWindowSize(event) {
        this.$store.commit("SET_WINDOW_SIZE", event);
      },
      setWindowScroll(event) {
        this.$store.commit("SET_WINDOW_SCROLL", event);
      },

      showDrawer() {
        !this.isMobile
          ? (this.drawer.mini = !this.drawer.mini)
          : (this.drawer.left = !this.drawer.left);
      }
    },
    async mounted() {
      const { data: subjects } = await this.$axios({
        method: "get",
        url: `http://stpcentral.net/subjects/sidemenu/4-J`
      });
      this.links.subjects.children = subjects.map(subject => {
        const link = {
          label: subject.subject,
          to: {
            name: "subject",
            params: {
              id: subject.subject.replace(" ", "_")
            }
          }
        };
        return link;
      });
    }
  };
</script>

<style lang="stylus" scoped>
  @import '~variables'

  .router-link-active, .q-item:focus
    background: $secondary

  .student-info
    margin: 0
    padding: 0.5em 2em
    color: #666
    font-weight: 700
    font-size: 24px
    opacity: 0.9

  .btn-info
    margin: 0 10px

  a.al-logo
    display: block
    float: left
    color: #fff
    text-decoration: none
    white-space: nowrap
    font-size: 24px
    font-family: Roboto, sans-serif
    line-height: 60px
    transition: color 0.2s ease

  a.al-logo span
    color: #209e91

  a:hover
    color: #1b867b

  .q-item, .q-item-label
    font-size: 13px
    transition: color 0.2s ease

  .q-item, .q-item-label
    font-size: 13px
    transition: color 0.2s ease

  .q-item-link:hover
    background: transparent

  .q-item:hover
    background: transparent
    color: #1b867b

  .q-icon
    color: #1b867b

  .sub-item
    padding-left: 52px

  .sub-item::first-letter
    text-transform: uppercase

  img.avatar
    margin: 0 15px
    width: 45px
    height: 45px
</style>
