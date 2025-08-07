// Show only one section at a time
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section');

function showSection(id) {
  sections.forEach(section => {
    if (section.id === id) {
      section.classList.remove('hidden');
    } else {
      section.classList.add('hidden');
    }
  });
}

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    showSection(targetId);
  });
});

// On initial load, show Home section only
document.addEventListener('DOMContentLoaded', () => {
  showSection('home');
});