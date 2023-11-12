<template>
    <v-app-bar color="rgb(25, 152, 194)" dark dense>
        <v-app-bar-title class="white--text">Funeral Homes</v-app-bar-title>
        <v-spacer></v-spacer>
        <template v-slot:append>
          <v-app-bar-nav-icon
            @click="drawer = !drawer"
            style="font-size: 38px; color: white !important"
          ></v-app-bar-nav-icon>
        </template>
        <v-btn @click="showNotification">
          <v-icon>mdi-bell</v-icon>
        </v-btn>
        <v-dialog v-model="notificationMessage" max-width="400">
          <v-card>
            <v-card-title>Notification</v-card-title>
            <v-card-text>
              {{ notificationMessage }}
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" @click="notificationMessage = false">Close</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-app-bar>
    <div class="chat-container">
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
    <navbottom/>
  </template>
  
  <script>
  
  import navbottom from "@/components/navbottom.vue";
  export default {
    components:{
        navbottom,
    },
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
  