// Theme Toggle
 const themeToggle = document.getElementById('themeToggle');
 const themeIcon = themeToggle.querySelector('i');
 
 // Check for saved theme preference or default to light
 const savedTheme = localStorage.getItem('theme') || 'light';
 if (savedTheme === 'dark') {
 document.body.classList.add('dark-mode');
 themeIcon.classList.remove('fa-moon');
 themeIcon.classList.add('fa-sun');
 }
 
 themeToggle.addEventListener('click', () => {
 document.body.classList.toggle('dark-mode');
 if (document.body.classList.contains('dark-mode')) {
 themeIcon.classList.remove('fa-moon');
 themeIcon.classList.add('fa-sun');
 localStorage.setItem('theme', 'dark');
 } else {
 themeIcon.classList.remove('fa-sun');
 themeIcon.classList.add('fa-moon');
 localStorage.setItem('theme', 'light');
 }
 });

 // Chat Functionality
 const messageInput = document.getElementById('messageInput');
 const sendBtn = document.getElementById('sendBtn');
 const messagesContainer = document.getElementById('messagesContainer');
 const typingIndicator = document.getElementById('typingIndicator');
 const newChatBtn = document.getElementById('newChatBtn');
 const settingsBtn = document.getElementById('settingsBtn');
 const settingsModal = document.getElementById('settingsModal');
 const closeModalButtons = document.querySelectorAll('.close-modal');
 const chatHistoryItems = document.querySelectorAll('.chat-history-item');

 // Hide typing indicator initially
 typingIndicator.style.display = 'none';

 // Auto-resize textarea
 messageInput.addEventListener('input', function() {
 this.style.height = 'auto';
 this.style.height = (this.scrollHeight) + 'px';
 });

 // Send message function
 function sendMessage() {
 const message = messageInput.value.trim();
 if (message === '') return;

 // Add user message
 addMessage(message, 'user');
 messageInput.value = '';
 messageInput.style.height = 'auto';

 // Show typing indicator
 typingIndicator.style.display = 'flex';
 messagesContainer.scrollTop = messagesContainer.scrollHeight;

 // Simulate AI response after delay
 setTimeout(() => {
 typingIndicator.style.display = 'none';
 addMessage(getAIResponse(message), 'ai');
 }, 1500);
 }

 // Add message to chat
 function addMessage(content, sender) {
 const messageDiv = document.createElement('div');
 messageDiv.className = `message ${sender}-message`;
 
 const messageContent = document.createElement('div');
 messageContent.className = 'message-content';
 messageContent.innerHTML = content;
 
 const messageTime = document.createElement('div');
 messageTime.className = 'message-time';
 messageTime.textContent = getCurrentTime();
 
 messageDiv.appendChild(messageContent);
 messageDiv.appendChild(messageTime);
 
 messagesContainer.insertBefore(messageDiv, typingIndicator);
 messagesContainer.scrollTop = messagesContainer.scrollHeight;
 }

 // Get current time in HH:MM format
 function getCurrentTime() {
 const now = new Date();
 return now.getHours().toString().padStart(2, '0') + ':' + 
 now.getMinutes().toString().padStart(2, '0');
 }

 // Generate simple AI responses
 function getAIResponse(userMessage) {
 const responses = [
 "I understand you're asking about: " + userMessage + ". Based on my knowledge, I can provide more detailed information on this topic.",
 "That's an interesting question! Let me share some insights about " + userMessage + ".",
 "I've analyzed your query about " + userMessage + ". Here's what I found: This is a complex topic with multiple aspects to consider.",
 "Thanks for your question! Regarding " + userMessage + ", I can offer several perspectives on this matter.",
 "I see you're interested in " + userMessage + ". Let me provide a comprehensive response to help you understand this better."
 ];
 
 return responses[Math.floor(Math.random() * responses.length)];
 }

 // Event listeners
 sendBtn.addEventListener('click', sendMessage);

 messageInput.addEventListener('keypress', (e) => {
 if (e.key === 'Enter' && !e.shiftKey) {
 e.preventDefault();
 sendMessage();
 }
 });

 newChatBtn.addEventListener('click', () => {
 if (messagesContainer.children.length > 2) { // More than just the initial messages
 if (confirm('Starting a new chat will clear the current conversation. Continue?')) {
 // Keep only the first AI message
 while (messagesContainer.children.length > 1) {
 messagesContainer.removeChild(messagesContainer.lastChild);
 }
 // Add a new welcome message
 addMessage("Hello! I'm your AI assistant. What would you like to talk about today?", 'ai');
 }
 }
 });

 // Settings modal
 settingsBtn.addEventListener('click', () => {
 settingsModal.style.display = 'flex';
 document.body.style.overflow = 'hidden';
 });

 closeModalButtons.forEach(button => {
 button.addEventListener('click', () => {
 settingsModal.style.display = 'none';
 document.body.style.overflow = 'auto';
 });
 });

 // Close modal when clicking outside
 window.addEventListener('click', (e) => {
 if (e.target === settingsModal) {
 settingsModal.style.display = 'none';
 document.body.style.overflow = 'auto';
 }
 });

 // Chat history selection
 chatHistoryItems.forEach(item => {
 item.addEventListener('click', () => {
 chatHistoryItems.forEach(i => i.classList.remove('active'));
 item.classList.add('active');
 
 // In a real app, this would load the selected conversation
 const chatTitle = item.querySelector('h4').textContent;
 document.querySelector('.chat-info h3').textContent = chatTitle;
 });
 });


function updateCreatedTime() {
const createdTimeElement = document.getElementById("createdTime");

const now = new Date();
const timeString = now.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
    });
createdTimeElement.textContent = `Created: Today, ${timeString}`;
}
updateCreatedTime(); // run on page load

newChatBtn.addEventListener('click', () => {
// Remove all messages EXCEPT typing indicator
const allMessages = messagesContainer.querySelectorAll('.message');
allMessages.forEach(msg => msg.remove());

// Ensure typing indicator stays at the bottom
 messagesContainer.appendChild(typingIndicator);

// Add default welcome message
addMessage("Hello! How can I help you?", 'ai');

// Update created time
updateCreatedTime();
});




 