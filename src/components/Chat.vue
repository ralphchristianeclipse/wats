<template lang="pug">
  q-card
    q-toolbar(glossy color="secondary")
      q-toolbar-title Chat
    q-card-main.chat-main(ref="chat")
      message(v-for="(message,index) of messages", :key="index" :message="message")
    hr
    .q-pa-sm
      q-input.col-xs-11(v-model="newMessage" float-label="Type a message" @keyup.enter="sendMessage")
    .q-pa-sm
      q-btn.full-width(@click="sendMessage" icon="send" color="primary")  Send
</template>

<script>
import Message from "src/components/Message";
import { scroll } from "quasar";
const { getScrollTarget, setScrollPosition } = scroll;

export default {
  name: "Chat",
  components: {
    Message
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
    async sendMessage() {
      if (!this.newMessage) return;
      this.messages.push({
        id: +new Date(),
        text: this.newMessage,
        sender: 1,
        receiver: 2
      });
      this.newMessage = "";
      await this.chatScrollToBottom();
    },
    async chatScrollToBottom() {
      await this.$nextTick();
      const chat = this.$refs.chat.$el;
      setScrollPosition(chat, chat.scrollHeight, 500);
    }
  }
};
</script>

<style lang="stylus" scoped>
.chat {
  &-main {
    overflow-y: auto;
    height: calc(100vh - 350px);
  }
}
</style>
