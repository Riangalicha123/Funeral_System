<template>
  <div class="chat-container">
    <!-- Chat toggle button -->
    <v-btn @click="toggleChat" icon class="chat-toggle-button">
      <v-icon>{{ chatVisible ? 'mdi-comment' : 'mdi-message-text' }}</v-icon>
    </v-btn>

    <div v-if="chatVisible" class="chat-messages">
      <div v-for="message in messages" :key="message.id">
        <div class="message" :class="{ 'my-message': message.isMine }">
          <p>
            {{ message.sender }}: {{ message.text }}
            <span class="message-time">{{ message.timestamp }}</span>
          </p>
        </div>
      </div>
    </div>

    <!-- Chat input form -->
    <form v-show="chatVisible" class="chat-input" @submit.prevent="sendMessage">
      <v-text-field v-model="newMessage" label="Type your message" outlined dense full-width></v-text-field>
      <v-btn type="submit" color="primary" class="send-button">Send</v-btn>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  data() {
    return {
      messages: [
        { id: 1, sender: 'Pj', text: 'Hello there!', isMine: false, timestamp: '10:00 AM' },
        { id: 2, sender: 'You', text: 'Hi Rian!', isMine: true, timestamp: '10:05 AM' },
        
      ],
      newMessage: '',
      chatVisible: false,
    };
  },
  methods: {
    sendMessage() {
      const message = this.newMessage.trim();
      if (message) {
        const currentTime = new Date().toLocaleTimeString();
        this.messages.push({ id: Date.now(), sender: 'You', text: message, isMine: true, timestamp: currentTime });
        this.newMessage = '';
      }
    },
    toggleChat() {
      this.chatVisible = !this.chatVisible;
    },
  },
};
</script>

<style scoped>
.chat-container {
  display: flex;
  flex-direction: column;
  min-height: 10vh;
  padding: 16px;
}

.chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
}

.my-message {
  background-color: #DCF8C6;
  align-self: flex-end;
  border-radius: 8px;
  margin: 4px 0;
  padding: 8px;
}

.chat-input {
  padding: 16px;
}

.chat-toggle-button {
  position: fixed;
  bottom: 16px;
  right: 26px;
  background-color: white;
}

.chat-toggle-button .v-icon {
  color: rgb(25, 152, 194);
}

.send-button {
  margin-top: 66px;
}

.message-time {
  color: gray;
  font-size: 12px;
}

@media (max-width: 600px) {
  .chat-container {
    padding: 8px;
  }

  .chat-messages {
    padding: 8px;
  }

  .chat-input {
    padding: 8px;
  }

  .send-button {
    margin-top: 8px;
  }
}
</style>
