<template lang="pug">
  div
    message(v-for="(message,index) of messages", :key="index" :message="message")
</template>

<script>
  import Message from "src/components/Message";
  export default {
    components: {
      Message
    },
    props: {
      messages: {
        type: Array
      }
    }
  };
</script>

<style>

</style>
