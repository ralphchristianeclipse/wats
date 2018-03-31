<template lang="pug">
  q-chat-message(:name="message.sender === 1 ? 'Ralph' : 'Gino'", :sent="message.sender === 1", :text="[message.text]", :stamp="message.id | date('YYYY-MM-DD')")
</template>

<script>
  export default {
    props: {
      message: {
        type: Object
      }
    }
  };
</script>

<style>

</style>
