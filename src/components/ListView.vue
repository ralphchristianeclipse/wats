<template lang="pug">
  q-card
    q-toolbar(glossy color="default" text-color="faded")
      slot(name="header-before")
      q-toolbar-title 
        slot(name="header") {{ label }}
      slot(name="header-after")
    transition-group.custom-list(tag="q-list", name="list", multiline, highlight, separator)
      q-item.cursor-pointer(v-for="(item,index) of items", :key="item.id || index", @click.native="$emit('select', item)")
        q-item-side(v-if="$scopedSlots.left && !avatar")
          slot(name="left", :item="item")
        q-item-side(v-else :avatar="item[avatar]") 
        q-item-main
          q-item-tile(label)
            .loading-line(v-if="loading")
            slot(v-else name="label", :item="item") No Label 
          q-item-tile(sublabel)
            .loading-line(v-if="loading")
            slot(v-else name="sublabel-first", :item="item")
              | No Sub Label
          q-item-tile(sublabel)
            .loading-line(v-if="loading")
            slot(v-else name="sublabel-last", :item="item")
              | No Sub Label
        q-item-side(right v-if="$scopedSlots.right")
          slot(name="right", :item="item")

</template>

<script>
  export default {
    name: "ComponentListView",
    props: {
      items: {
        type: Array,
        default: () => []
      },
      label: {
        type: String,
        default: "No Label"
      },
      avatar: {
        type: String,
        default: ""
      },
      loading: {
        type: Boolean
      }
    }
  };
</script>

<style lang="stylus">
  .list, .grid
    &-leave-active
      position: absolute
      z-index: 0
      transition: all 200ms ease-in

    &-enter, &-leave-to
      opacity: 0

    &-enter
      transform: scale(1)

    &-move
      transition: all 600ms ease-in-out 50ms

    &-enter-active
      transition: all 300ms ease-out
</style>
