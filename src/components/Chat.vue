<template lang="pug">
  .q-pa-md
    messages(:messages="messages")
    q-input(v-model="newMessage" float-label="New Message" @keyup.enter="sendMessage")
</template>

<script>
  import Messages from "src/components/Messages";
  export default {
    name: "Chat",
    components: {
      Messages
    },
    data() {
      return {
        newMessage: "",
        messages: [
          {
            id: 1,
            text: "Hey You",
            sender: 1,
            receiver: 2
          },
          {
            id: 2,
            text: "Hey You",
            sender: 2,
            receiver: 1
          },
          {
            id: 3,
            text: "Hey You",
            sender: 1,
            receiver: 2
          },
          {
            id: 4,
            text: "Hey You",
            sender: 2,
            receiver: 1
          }
        ]
      };
    },
    methods: {
      sendMessage() {
        this.messages.push({
          id: +new Date(),
          text: this.newMessage,
          sender: 1,
          receiver: 2
        });
        this.newMessage = "";
      }
    }
  };
</script>

<style>

</style>
