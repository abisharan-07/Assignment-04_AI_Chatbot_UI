// DOM Elements
const themeToggleBtn = document.getElementById('theme-toggle-btn');
const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');
const loginModal = document.getElementById('login-modal');
const signupModal = document.getElementById('signup-modal');
const forgotPasswordModal = document.getElementById('forgot-password-modal');
const closeButtons = document.querySelectorAll('.close');
const forgotPasswordLink = document.getElementById('forgot-password-link');
const startChatBtn = document.getElementById('startChatBtn');

 // Start Chat Button
 startChatBtn.addEventListener('click', () => {
 window.location.href = 'home.html';
 });

// // Chat-specific elements (only on chat page)
// const chatMessages = document.getElementById('chat-messages');
// const userInput = document.getElementById('user-input');
// const sendBtn = document.getElementById('send-btn');

// Theme Management
function initTheme() {
const savedTheme = localStorage.getItem('theme') || 'light-mode';
document.body.className = savedTheme;
updateThemeButton();
}

function toggleTheme() {
if (document.body.classList.contains('light-mode')) {
document.body.classList.replace('light-mode', 'dark-mode');
localStorage.setItem('theme', 'dark-mode');
} else {
document.body.classList.replace('dark-mode', 'light-mode');
localStorage.setItem('theme', 'light-mode');
}
updateThemeButton();
}

function updateThemeButton() {
if (themeToggleBtn) {
if (document.body.classList.contains('light-mode')) {
themeToggleBtn.textContent = '🌙';
} else {
themeToggleBtn.textContent = '☀️';
}
}
}

// Modal Management
function openModal(modal) {
modal.style.display = 'flex';
}

function closeModal(modal) {
modal.style.display = 'none';
}

function closeAllModals() {
closeModal(loginModal);
closeModal(signupModal);
closeModal(forgotPasswordModal);
}

// Chat Functionality
function addMessage(content, isUser = false) {
if (!chatMessages) return;

const messageDiv = document.createElement('div');
messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;

const avatarDiv = document.createElement('div');
avatarDiv.className = 'message-avatar';
avatarDiv.textContent = isUser ? 'You' : 'AI';

const contentDiv = document.createElement('div');
contentDiv.className = 'message-content';

const messageText = document.createElement('p');
messageText.textContent = content;

const timeSpan = document.createElement('span');
timeSpan.className = 'message-time';
timeSpan.textContent = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

contentDiv.appendChild(messageText);
contentDiv.appendChild(timeSpan);

messageDiv.appendChild(avatarDiv);
messageDiv.appendChild(contentDiv);

chatMessages.appendChild(messageDiv);
chatMessages.scrollTop = chatMessages.scrollHeight;
}

function sendMessage() {
if (!userInput || !userInput.value.trim()) return;

const message = userInput.value.trim();
addMessage(message, true);
userInput.value = '';

// Simulate AI response after a short delay
setTimeout(() => {
const responses = [
"I understand your question. Let me think about that...",
"That's an interesting point. Here's what I think...",
"Based on my knowledge, I can tell you that...",
"I'm glad you asked! Here's some information that might help...",
"That's a great question! Let me provide some insights..."
];
const randomResponse = responses[Math.floor(Math.random() * responses.length)];
addMessage(randomResponse, false);
}, 1000 + Math.random() * 2000);
}

// Form Handling
function handleLoginFormSubmit(e) {
e.preventDefault();
alert('Login functionality would be implemented here!');
closeAllModals();
}

function handleSignupFormSubmit(e) {
e.preventDefault();
alert('Signup functionality would be implemented here!');
closeAllModals();
}

function handleForgotPasswordFormSubmit(e) {
e.preventDefault();
alert('Password reset link would be sent to your email!');
closeAllModals();
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
// Initialize theme
initTheme();

// Theme toggle
if (themeToggleBtn) {
themeToggleBtn.addEventListener('click', toggleTheme);
}

// Modal open buttons
if (loginBtn) {
loginBtn.addEventListener('click', () => openModal(loginModal));
}

if (signupBtn) {
signupBtn.addEventListener('click', () => openModal(signupModal));
}

// Close buttons
closeButtons.forEach(button => {
button.addEventListener('click', () => {
const modal = button.closest('.modal');
closeModal(modal);
});
});

// Forgot password link
if (forgotPasswordLink) {
forgotPasswordLink.addEventListener('click', (e) => {
e.preventDefault();
closeModal(loginModal);
openModal(forgotPasswordModal);
});
}

// Form submissions
const loginForm = document.getElementById('login-form');
if (loginForm) {
loginForm.addEventListener('submit', handleLoginFormSubmit);
}

const signupForm = document.getElementById('signup-form');
if (signupForm) {
signupForm.addEventListener('submit', handleSignupFormSubmit);
}

const forgotPasswordForm = document.getElementById('forgot-password-form');
if (forgotPasswordForm) {
forgotPasswordForm.addEventListener('submit', handleForgotPasswordFormSubmit);
}

// Chat functionality
if (sendBtn) {
sendBtn.addEventListener('click', sendMessage);
}

if (userInput) {
userInput.addEventListener('keypress', (e) => {
if (e.key === 'Enter') {
sendMessage();
}
});
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
if (e.target.classList.contains('modal')) {
closeAllModals();
}
});
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