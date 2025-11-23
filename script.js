// Theme Toggle
 const themeToggle = document.getElementById('themeToggle');
 const themeIcon = themeToggle.querySelector('i');
 
 themeToggle.addEventListener('click', () => {
 document.body.classList.toggle('dark-mode');
 if (document.body.classList.contains('dark-mode')) {
 themeIcon.classList.remove('fa-moon');
 themeIcon.classList.add('fa-sun');
 } else {
 themeIcon.classList.remove('fa-sun');
 themeIcon.classList.add('fa-moon');
 }
 });

 // Modal Functionality
 const loginBtn = document.getElementById('loginBtn');
 const signupBtn = document.getElementById('signupBtn');
 const loginModal = document.getElementById('loginModal');
 const forgotPasswordModal = document.getElementById('forgotPasswordModal');
 const closeeModalButtons = document.querySelectorAll('.closee-modal');
 const forgotPasswordLink = document.getElementById('forgotPasswordLink');
 const backToLoginLink = document.getElementById('backToLoginLink');
 const modalTabs = document.querySelectorAll('.modal-tab');
 const startChatBtn = document.getElementById('startChatBtn');

 // Open Login Modal
 loginBtn.addEventListener('click', () => {
 loginModal.style.display = 'flex';
 document.body.style.overflow = 'hidden';
 });

 // Open Signup Modal (via signup button)
 signupBtn.addEventListener('click', () => {
 loginModal.style.display = 'flex';
 document.body.style.overflow = 'hidden';
 // Switch to signup tab
 switchTab('signup');
 });

 // Start Chat Button
 startChatBtn.addEventListener('click', () => {
 window.location.href = 'home.html';
 });

 // Close Modal
 closeeModalButtons.forEach(button => {
 button.addEventListener('click', () => {
 loginModal.style.display = 'none';
 forgotPasswordModal.style.display = 'none';
 document.body.style.overflow = 'auto';
 });
 });

 // Close modal when clicking outside
 window.addEventListener('click', (e) => {
 if (e.target === loginModal) {
 loginModal.style.display = 'none';
 document.body.style.overflow = 'auto';
 }
 if (e.target === forgotPasswordModal) {
 forgotPasswordModal.style.display = 'none';
 document.body.style.overflow = 'auto';
 }
 });

 // Forgot Password Link
 forgotPasswordLink.addEventListener('click', (e) => {
 e.preventDefault();
 loginModal.style.display = 'none';
 forgotPasswordModal.style.display = 'flex';
 });

 // Back to Login Link
 backToLoginLink.addEventListener('click', (e) => {
 e.preventDefault();
 forgotPasswordModal.style.display = 'none';
 loginModal.style.display = 'flex';
 });

 // Modal Tabs
 modalTabs.forEach(tab => {
 tab.addEventListener('click', () => {
 const tabName = tab.getAttribute('data-tab');
 switchTab(tabName);
 });
 });

 function switchTab(tabName) {
 // Update active tab
 modalTabs.forEach(tab => {
 tab.classList.remove('active');
 if (tab.getAttribute('data-tab') === tabName) {
 tab.classList.add('active');
 }
 });

 // Update active tab content
 document.querySelectorAll('.tab-content').forEach(content => {
 content.classList.remove('active');
 });
 document.getElementById(`${tabName}-tab`).classList.add('active');
 }

 // Form Submissions
 document.getElementById('loginForm').addEventListener('submit', (e) => {
 e.preventDefault();
 alert('Login functionality would be implemented here');
 loginModal.style.display = 'none';
 document.body.style.overflow = 'auto';
 });

 document.getElementById('signupForm').addEventListener('submit', (e) => {
 e.preventDefault();
 alert('Signup functionality would be implemented here');
 loginModal.style.display = 'none';
 document.body.style.overflow = 'auto';
 });

 document.getElementById('forgotPasswordForm').addEventListener('submit', (e) => {
 e.preventDefault();
 alert('Password reset email would be sent here');
 forgotPasswordModal.style.display = 'none';
 document.body.style.overflow = 'auto';
 });