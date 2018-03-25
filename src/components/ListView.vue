<template>

  <q-list multiline highlight separator>
    <q-list-header> {{ label }} </q-list-header>

    <q-item v-for="(item,index) of items" :key="index" @click.native="$emit('select', item)">
      <q-item-main>

        <q-item-tile label>
          <slot name="label" :item="item">No Label </slot>
        </q-item-tile>

        <q-item-tile sublabel>
          <slot name="sublabel-first" :item="item">
            No Sub Label
          </slot>
        </q-item-tile>

        <q-item-tile sublabel>
          <slot name="sublabel-last" :item="item">
            No Sub Label
          </slot>
        </q-item-tile>

      </q-item-main>
    </q-item>

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
    }
  };
</script>

<style>

</style>
