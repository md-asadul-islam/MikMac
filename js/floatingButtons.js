// Back to Top Button
window.addEventListener('scroll', function() {
  const backToTopButton = document.getElementById('backToTop');
  if (window.pageYOffset > 300) {
    backToTopButton.classList.add('visible');
  } else {
    backToTopButton.classList.remove('visible');
  }
});

document.getElementById('backToTop').addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Floating Chat Button
const chatButton = document.getElementById('chatButton');
const chatContainer = document.querySelector('.chat-container');

chatButton.addEventListener('click', function() {
  chatContainer.classList.toggle('active');
  
  // Close when clicking outside
  if (chatContainer.classList.contains('active')) {
    document.addEventListener('click', closeChatOnClickOutside);
  } else {
    document.removeEventListener('click', closeChatOnClickOutside);
  }
});

function closeChatOnClickOutside(e) {
  if (!chatContainer.contains(e.target)) {
    chatContainer.classList.remove('active');
    document.removeEventListener('click', closeChatOnClickOutside);
  }
}

