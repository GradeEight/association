// public/script.js
const socket = io();
let username = '';

document.addEventListener("DOMContentLoaded", () => {
    const messagesContainer = document.getElementById("messages");
    const messageInput = document.getElementById("messageInput");
    const sendButton = document.getElementById("sendButton");
    const nameModal = document.getElementById("nameModal");
    const usernameInput = document.getElementById("usernameInput");
    const joinButton = document.getElementById("joinButton");
    const chatContainer = document.getElementById("chatContainer");

    // Display a message
    const displayMessage = (message) => {
        const messageElement = document.createElement("div");
        messageElement.classList.add("message");
        messageElement.textContent = message;
        messagesContainer.appendChild(messageElement);
        messagesContainer.scrollTop = messagesContainer.scrollHeight; // Scroll to the bottom
    };

    // Send a message
    const sendMessage = () => {
        const message = messageInput.value.trim();
        if (message) {
            socket.emit("chat message", `${username}: ${message}`);
            messageInput.value = ""; // Clear input
        }
    };

    // Notify when a user joins
    const notifyUserJoined = (user) => {
        const joinMessage = `${user} has joined the chat.`;
        const messageElement = document.createElement("div");
        messageElement.classList.add("message", "user-joined");
        messageElement.textContent = joinMessage;
        messagesContainer.appendChild(messageElement);
        messagesContainer.scrollTop = messagesContainer.scrollHeight; // Scroll to the bottom
    };

    // Event listeners
    sendButton.addEventListener("click", sendMessage);
    messageInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            sendMessage();
        }
    });

    // Listen for messages from the server
    socket.on("chat message", (message) => {
        displayMessage(message);
    });

    // Handle user joining
    joinButton.addEventListener("click", () => {
        username = usernameInput.value.trim();
        if (username) {
            nameModal.style.display = "none"; // Hide modal
            chatContainer.style.display = "block"; // Show chat
            notifyUserJoined(username); // Notify that user has joined
            socket.emit("user joined", username); // Notify server
        }
    });

    // Listen for user join notifications from the server
    socket.on("user joined", (user) => {
        notifyUserJoined(user);
    });
});