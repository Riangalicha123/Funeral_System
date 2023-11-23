<template>
  <v-app>
    <v-app-bar color="rgb(25, 152, 194)" dark dense>
      <v-app-bar-title class="white--text">Funeral Homes</v-app-bar-title>
      <v-spacer></v-spacer>
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

    <v-container>
      
      <v-card class="chat-container" v-show="chatVisible">
        <v-card-title class="headline">Message</v-card-title>
        <v-divider></v-divider>

        <div class="chat-messages">
          <!-- Display messages from both user and admin -->
          <div v-for="message in messages" :key="message.id">
            <div class="message" :class="{ 'my-message': message.isMine, 'admin-message': message.isAdmin }">
              <p>
                {{ message.sender }}: {{ message.text }}
                <span class="message-time">{{ message.timestamp }}</span>
              </p>
            </div>
          </div>
        </div>

        <!-- Chat input form -->
        <form class="chat-input" @submit.prevent="sendMessage">
          <v-text-field v-model="newMessage" label="Type your message" outlined dense full-width></v-text-field>
          <v-btn type="submit" color="primary" class="send-button">Send</v-btn>
        </form>
      </v-card>

      <!-- Chat toggle button -->
      <v-btn class="chat-toggle-button" fab @click="toggleChatVisibility">
        <v-icon>{{ chatVisible ? 'mdi-chevron-down' : 'mdi-chat' }}</v-icon>
      </v-btn>
    </v-container>

    
    <navbottom />
  </v-app>
</template>

<script>
import navbottom from "@/components/navbottom.vue";

export default {
  components: {
    navbottom,
  },
  data() {
    return {
      notificationMessage: false,
      messages: [
        {
          id: Date.now() - 1,
          sender: 'Admin',
          text: 'Welcome! How can I assist you?',
          isAdmin: true,
          timestamp: new Date().toLocaleString(),
        },
      ],
      newMessage: "",
      chatVisible: true,
    };
  },
  methods: {
    showNotification() {
      this.notificationMessage = "This is a notification message.";
    },
    sendMessage() {
      if (this.newMessage.trim() !== "") {
        const timestamp = new Date().toLocaleString();

        this.messages.push({
          id: Date.now(),
          sender: 'You',
          text: this.newMessage,
          isMine: true,
          timestamp: timestamp,
        });

        this.messages.push({
          id: Date.now() + 1,
          sender: 'Admin',
          text: 'Thank you for your message. I will get back to you shortly.',
          isAdmin: true,
          timestamp: new Date().toLocaleString(),
        });

        this.newMessage = "";
      }
    },
    toggleChatVisibility() {
      this.chatVisible = !this.chatVisible;
    },
  },
};
</script>


<style>
/* Add your styles here */
</style>

<style>
/* Add styles for the message container */
.v-container{
  margin-top: 150px;
}
.message-container {
  margin-top: 20px;
}

/* Style for message cards */
.message-card {
  width: 300px;
  margin: 10px;
}

/* Style for sent messages */
.sent {
  background-color: rgb(25, 152, 194);
  color: white;
}

/* Style for received messages */
.received {
  background-color: #e0e0e0;
}

/* Add styles for the chat card */
.chat-container {
  display: flex;
  flex-direction: column;
  min-height: 10vh;
  padding: 16px;
  background-color: #f5f5f5;
}

/* Add styles for the chat messages */
.chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
}

/* Add styles for the my-message class */
.my-message {
  background-color: #DCF8C6;
  align-self: flex-end;
  border-radius: 8px;
  margin: 4px 0;
  padding: 8px;
}

/* Add styles for the chat input form */
.chat-input {
  padding: 16px;
}

/* Add styles for the chat toggle button */
.chat-toggle-button {
  position: fixed;
  bottom: 16px;
  right: 26px;
  background-color: white;
}

/* Add styles for the chat toggle button icon */
.chat-toggle-button .v-icon {
  color: rgb(25, 152, 194);
}

/* Add styles for the send button */
.send-button {
  margin-top: 66px;
}

/* Add styles for the message time */
.message-time {
  color: gray;
  font-size: 12px;
}

/* Add responsive styles */
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
