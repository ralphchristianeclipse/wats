<template>
  <q-layout view="lHh Lpr fFr">
    <q-layout-header>
      <q-toolbar>
        <q-btn flat round dense icon="menu" @click="leftDrawer = !leftDrawer" />
        <q-toolbar-title>
          STP Central
        </q-toolbar-title>
        <img :src="auth.image" alt="" class="avatar">
        <q-btn round icon="exit_to_app" @click="logout"></q-btn>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer side="left" v-model="leftDrawer" :content-class="'bg-primary text-white'">
      <q-list no-border link inset-delimiter>
        <template v-for="(link,key,index) of links">
          <q-item v-if="!link.children" :key="`${link.name}-${index}`" :to="link.to" dark link>
            <q-item-side v-if="link.icon" :icon="link.icon" />
            <q-item-main :label="link.label" />
          </q-item>
          <q-collapsible v-else :key="`${link.name}-${index}`" indent icon="explore" :label="link.label" opened>
            <q-item v-for="(link,index) of link.children" :key="`${link.name}-${index}`" :to="link.to" dark link>
              <q-item-side v-if="link.icon" :icon="link.icon" />
              <q-item-main :label="link.label" />
            </q-item>
          </q-collapsible>
        </template>
      </q-list>

    </q-layout-drawer>

    <q-page-container>
      <transition appear mode="out-in" enter-active-class="animated zoomIn" leave-active-class="animated zoomOut">
        <router-view :key="$route.fullPath" />
      </transition>

    </q-page-container>

  </q-layout>
</template>

<script>
  import { openURL } from "quasar";
  import { mapGetters, mapActions } from "vuex";
  export default {
    // name: 'LayoutName',
    data() {
      return {
        leftDrawer: this.$q.platform.is.desktop,
        links: {
          overview: {
            label: "Overview",
            to: {
              name: "overview"
            },
            icon: "dashboard"
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
      ...mapGetters(["auth"])
    },
    methods: {
      openURL,
      ...mapActions(["logout"])
    },
    async mounted() {
      const { data: subjects } = await this.$axios({
        method: "get",
        url: `http://stpcentral.net/subjects/sidemenu/4-J`
      });
      this.links.subjects.children = subjects.map(subject => {
        const link = {
          label: subject.subject.toUpperCase(),
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
</style>
