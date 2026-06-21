document.addEventListener('DOMContentLoaded', () => {
  const revealElements = document.querySelectorAll('.fade-reveal');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.2 }
  );

  revealElements.forEach((element) => observer.observe(element));

  const form = document.getElementById('contactForm');
  const feedback = document.getElementById('formFeedback');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    feedback.textContent = 'Thank you! Your message has been sent successfully.';
    form.reset();
  });
});
