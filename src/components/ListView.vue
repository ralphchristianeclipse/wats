<template lang="pug">
  transition-group.custom-list(tag="q-list", name="list", multiline, highlight, separator)
    q-list-header.custom-header.default.glossy(key="header") 
      slot(name="header") {{ label }}
    q-item.cursor-pointer(v-for="(item,index) of items", :key="item.id || index", @click.native="$emit('select', item)")
      q-item-main
        q-item-tile(label)
          slot(name="label", :item="item") No Label 
        q-item-tile(sublabel)
          slot(name="sublabel-first", :item="item")
            | No Sub Label
        q-item-tile(sublabel)
          slot(name="sublabel-last", :item="item")
            | No Sub Label
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
