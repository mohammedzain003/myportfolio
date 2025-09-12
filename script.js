// Preloader
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
});

// Theme Switcher
const themeSwitcher = document.querySelector('.theme-switcher');
const body = document.body;

themeSwitcher.addEventListener('click', () => {
    body.dataset.theme = body.dataset.theme === 'light' ? 'dark' : 'light';
});

// Typing Effect
new Typed('.typing', {
    strings: ['Web Developer', 'Software Engineer', 'Tech Enthusiast'],
    loop: true,
    typeSpeed: 70,
    backSpeed: 70,
});

// Project Filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filter = button.dataset.filter;

        projectCards.forEach(card => {
            if (filter === 'all' || card.classList.contains(filter)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Get the modal
var modal = document.getElementById("profile-modal");

// Get the image and insert it inside the modal
var img = document.querySelector(".profile-pic");
var modalImg = document.getElementById("modal-img");
var modalTitle = document.getElementById("modal-title");
var modalBio = document.getElementById("modal-bio");

img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  modalImg.alt = this.alt;
  modalTitle.textContent = "Profile Picture";
  modalBio.textContent = "Professional headshot showcasing expertise in web development and technology.";
}

// Handle view project buttons
document.querySelectorAll('.view-project-btn').forEach(button => {
  button.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.getAttribute('data-img');
    modalImg.alt = this.getAttribute('data-title');
    modalTitle.textContent = this.getAttribute('data-title');
    modalBio.textContent = this.getAttribute('data-bio');
  }
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// Close modal when clicking outside
modal.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Scroll-triggered animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('animate');
      }, index * 200); // Stagger animation
    }
  });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});
