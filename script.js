// DOM Elements
const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');
const loginModal = document.getElementById('login-modal');
const signupModal = document.getElementById('signup-modal');
const closeModalBtns = document.querySelectorAll('.close-modal');
const switchModalBtns = document.querySelectorAll('.switch-modal');
const chatInterface = document.getElementById('chat-interface');
const dashboard = document.getElementById('dashboard');
const chatLink = document.getElementById('chat-link');
const dashboardLink = document.getElementById('dashboard-link');
const heroChatBtn = document.getElementById('hero-chat-btn');
const newChatBtn = document.getElementById('new-chat-btn');
const sendBtn = document.getElementById('send-btn');
const messageInput = document.getElementById('message-input');
const chatMessages = document.getElementById('chat-messages');
const loginSubmit = document.getElementById('login-submit');
const signupSubmit = document.getElementById('signup-submit');

// Show Login Modal
loginBtn.addEventListener('click', () => {
    loginModal.style.display = 'flex';
});

// Show Signup Modal
signupBtn.addEventListener('click', () => {
    signupModal.style.display = 'flex';
});

// Close Modals
closeModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        loginModal.style.display = 'none';
        signupModal.style.display = 'none';
    });
});

// Switch between Login and Signup modals
switchModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const targetModal = btn.getAttribute('data-target');
        loginModal.style.display = 'none';
        signupModal.style.display = 'none';
        document.getElementById(targetModal).style.display = 'flex';
    });
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        loginModal.style.display = 'none';
    }
    if (e.target === signupModal) {
        signupModal.style.display = 'none';
    }
});

// Show Chat Interface
chatLink.addEventListener('click', (e) => {
    e.preventDefault();
    chatInterface.style.display = 'block';
    dashboard.style.display = 'none';
    window.scrollTo({ top: chatInterface.offsetTop - 100, behavior: 'smooth' });
});

// Show Dashboard
dashboardLink.addEventListener('click', (e) => {
    e.preventDefault();
    dashboard.style.display = 'block';
    chatInterface.style.display = 'none';
    window.scrollTo({ top: dashboard.offsetTop - 100, behavior: 'smooth' });
});

// Hero Chat Button
heroChatBtn.addEventListener('click', () => {
    chatInterface.style.display = 'block';
    dashboard.style.display = 'none';
    window.scrollTo({ top: chatInterface.offsetTop - 100, behavior: 'smooth' });
});

// New Chat Button
newChatBtn.addEventListener('click', () => {
    chatInterface.style.display = 'block';
    dashboard.style.display = 'none';
    window.scrollTo({ top: chatInterface.offsetTop - 100, behavior: 'smooth' });
});

// Send Message
sendBtn.addEventListener('click', sendMessage);
messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const message = messageInput.value.trim();
    if (message) {
        // Add user message
        const userMessage = document.createElement('div');
        userMessage.classList.add('message', 'user-message');
        userMessage.textContent = message;
        chatMessages.appendChild(userMessage);

        // Clear input
        messageInput.value = '';

        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // Simulate AI response after a short delay
        setTimeout(() => {
            const aiMessage = document.createElement('div');
            aiMessage.classList.add('message', 'ai-message');
            aiMessage.textContent = getAIResponse(message);
            chatMessages.appendChild(aiMessage);

            // Scroll to bottom
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 1000);
    }
}

// Simple AI response simulation
function getAIResponse(message) {
    const responses = [
        "I understand you're asking about: " + message + ". Can you provide more details?",
        "That's an interesting question! Based on my knowledge, I'd recommend exploring this further.",
        "I can help with that. Let me provide some information that might be useful.",
        "Thanks for your question. Here's what I think about that topic.",
        "I've processed your request and here's my response based on the available information."
    ];
    return responses[Math.floor(Math.random() * responses.length)];
}

// Form submissions
loginSubmit.addEventListener('click', () => {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    if (email && password) {
        alert('Login successful!');
        loginModal.style.display = 'none';
    } else {
        alert('Please fill in all fields');
    }
});

signupSubmit.addEventListener('click', () => {
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    if (name && email && password) {
        alert('Account created successfully!');
        signupModal.style.display = 'none';
    } else {
        alert('Please fill in all fields');
    }
});
