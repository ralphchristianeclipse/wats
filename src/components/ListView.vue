<template>

  <q-list multiline highlight separator>
    <q-list-header> {{ label }} </q-list-header>
    <template v-for="(item,index) of items">
      <q-item :key="index">
        <q-item-main>
          <slot name="label" :item="item">
            <q-item-tile label> No Label </q-item-tile>
          </slot>
          <slot name="sublabel-first" :item="item">
            <q-item-tile sublabel> No Sub Label </q-item-tile>
          </slot>
          <slot name="sublabel-last" :item="item">
            <q-item-tile sublabel> No Sub Label </q-item-tile>
          </slot>
        </q-item-main>
      </q-item>
    </template>
  </q-list>
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
    },
    mounted() {
      console.log(this.$scopedSlots);
    }
  };
</script>

<style>

</style>
